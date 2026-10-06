"use client";

import { useState, type KeyboardEvent } from "react";
import {
  integrationLayerIds,
  type IntegrationsContent,
} from "@/content/integrations";
import styles from "./integrations.module.css";

type EcosystemMapProps = {
  content: IntegrationsContent;
};

export function EcosystemMap({ content }: EcosystemMapProps) {
  const initial =
    content.nodes.find((node) => node.id === "salesforce")?.id ?? content.nodes[0]?.id ?? "";
  const [selectedId, setSelectedId] = useState(initial);
  const selected = content.nodes.find((node) => node.id === selectedId) ?? content.nodes[0];
  const selectedLayer = content.layers.find((layer) => layer.id === selected?.layer);

  function selectByOffset(offset: number) {
    const ids = content.nodes.map((node) => node.id);
    const current = ids.indexOf(selectedId);
    const next = ids[(current + offset + ids.length) % ids.length];
    if (!next) return;
    setSelectedId(next);
    document.getElementById(`connection-${next}`)?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectByOffset(1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      selectByOffset(-1);
    } else if (event.key === "Home") {
      event.preventDefault();
      const first = content.nodes[0]?.id;
      if (!first) return;
      setSelectedId(first);
      document.getElementById(`connection-${first}`)?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      const last = content.nodes[content.nodes.length - 1]?.id;
      if (!last) return;
      setSelectedId(last);
      document.getElementById(`connection-${last}`)?.focus();
    }
  }

  if (!selected || !selectedLayer) return null;

  return (
    <div className={styles.map}>
      <div className={styles.stack} role="group" aria-label={content.mapLabel}>
        {integrationLayerIds.map((layerId, index) => {
          const layer = content.layers.find((item) => item.id === layerId);
          if (!layer) return null;
          const nodes = content.nodes.filter((node) => node.layer === layerId);

          return (
            <div key={layer.id}>
              {index > 0 ? <Bridge label={content.bridge} /> : null}
              <section
                className={styles.layer}
                data-active={selected.layer === layer.id ? "true" : "false"}
                aria-labelledby={`layer-${layer.id}`}
              >
                <header className={styles.layerHead}>
                  <h3 id={`layer-${layer.id}`} className={styles.layerTitle}>
                    {layer.title}
                  </h3>
                  <p className={styles.layerSummary}>{layer.summary}</p>
                </header>
                <ul className={styles.nodes}>
                  {nodes.map((node) => {
                    const pressed = node.id === selected.id;
                    return (
                      <li key={node.id}>
                        <button
                          id={`connection-${node.id}`}
                          type="button"
                          className={styles.node}
                          aria-pressed={pressed}
                          tabIndex={pressed ? 0 : -1}
                          onClick={() => setSelectedId(node.id)}
                          onKeyDown={onKeyDown}
                        >
                          <span className={styles.dot} aria-hidden="true" />
                          {node.name}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          );
        })}
      </div>
      <div className={styles.detail} aria-live="polite">
        <p className={styles.detailLayer}>{selectedLayer.title}</p>
        <p className={styles.detailName}>{selected.name}</p>
        <p className={styles.detailCopy}>{selected.exchange}</p>
      </div>
    </div>
  );
}

function Bridge({ label }: { label: string }) {
  return (
    <div className={styles.bridge} aria-hidden="true">
      <span className={styles.bridgeTravel} />
      <svg className={styles.bridgeIcon} viewBox="0 0 16 28" width="16" height="28">
        <path
          d="M8 8V2M5.2 4.6 8 2l2.8 2.6M8 20v6M5.2 23.4 8 26l2.8-2.6M8 10v8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.bridgeLabel}>{label}</span>
    </div>
  );
}
