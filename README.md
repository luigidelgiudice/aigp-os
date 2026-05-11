# AIGP‑OS
**Artificial Intelligence Governance at Operating System Level**

AIGP‑OS is an operating‑system‑level governance protocol designed to treat Artificial Intelligence as a **critical system capability**, rather than as an application feature or software library.

The protocol introduces a **non‑bypassable, ex‑ante decision authority** that determines **whether and when AI may be invoked**, before execution, independently from models, vendors, or calling applications.

---

## Why AIGP‑OS

Current AI governance approaches rely predominantly on:
- organizational policies,
- documentation and procedures,
- post‑hoc monitoring and logging,
- application‑level enforcement.

This model is increasingly insufficient in regulated and high‑risk environments, where frameworks such as the **EU AI Act**, **ISO/IEC 42001**, **ISO/IEC 27001**, and **NIS2** require **preventive technical controls, auditability, and accountability**.

AIGP‑OS addresses the missing layer: **AI governance at system level, before execution**.

---

## Core Principles

- **Ex‑ante authorization** of AI usage  
- **Non‑bypassable enforcement** at operating system level  
- **Decision‑level audit by construction**  
- **Separation between availability and authorization**  
- **Model‑, vendor‑ and application‑agnostic design**  

AIGP‑OS does **not** inspect prompts, data, or outputs.  
It governs **the right to use AI**, not its content.

---

## Regulatory Relevance

AIGP‑OS is designed as a **technical governance enabler** aligned with:

- **EU AI Act** (ex‑ante controls, human oversight)
- **ISO/IEC 42001** (Artificial Intelligence Management Systems)
- **ISO/IEC 27001** (governance of critical capabilities)
- **NIS2 Directive** (risk management and accountability)

The protocol aims to translate regulatory obligations into **concrete, enforceable technical primitives**.

---

## Project Status

- **Status:** Public Working Draft  
- **Scope:** Protocol specification and architectural pattern  
- **Implementation:** An enterprise reference implementation is under development  

This repository currently contains conceptual, structural, and editorial material.

---

## Governance

- **Document:** AIGP‑OS Protocol / WD‑0004  
- **Stage:** Public Working Draft  
- **Editorial Board:** AIGP‑OS Editorial Board  
- **Author / Founder:** Luigi Del Giudice  

---

## License

This documentation is licensed under the  
**Creative Commons Attribution 4.0 International (CC BY 4.0)** license.

The license applies to the *text and documentation*.  
Patent rights, if any, are not waived by publication of this material.

---

## Contributing

AIGP‑OS is published as an open specification.

Contributions may be proposed through:
- issues,
- structured feedback,
- review discussions.

Implementation contributions will be defined in a later phase.

---

## Links

- Project website: https://aigp-os.org  
- Repository: https://github.com/luigidelgiudice/aigp-os

---

*This protocol originates from direct experience building systems where traceability, accountability, and auditability are non‑negotiable.*

© 2026 AIGP‑OS Editorial Board
