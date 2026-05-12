/* AIGP-OS — Language switch
 * Italian is the canonical source rendered in the HTML.
 * EN / FR / ES translations + minimal vanilla-JS switcher.
 */
(function () {
  "use strict";

  var LANGS = ["it", "en", "fr", "es"];

  var dict = {
    en: {
      "doc.title": "AIGP-OS — Operating-System-Level Governance for Artificial Intelligence",
      "banner.l1": "Open specification",
      "banner.l2": "Public working draft",
      "banner.l3": "Maintained by the AIGP-OS editorial group",
      "mast.sub": "Open specification · v0.4",
      "mast.ref": "Ref. AIGP-OS / WD-0004 · 11 May 2026",
      "cover.eyebrow": "AIGP-OS · Governance protocol",
      "cover.h1": "Operating-system-level governance for artificial intelligence<em>.</em>",
      "cover.sub": "AIGP-OS is an operating-system-level governance protocol for artificial intelligence, designed to treat AI as a critical system capability rather than as a library or application feature.",
      "s1.tag": "Objective",
      "s1.h2": "A decision point before execution.",
      "s1.lede": "The objective of AIGP-OS is to introduce a non-bypassable, ex-ante decision point that determines whether and when AI can be invoked, prior to execution.",
      "s1.p1": "The decision is taken independently of the model, the vendor and the calling software. The protocol operates at the operating-system layer, where authorisation precedes invocation and cannot be evaded by the application requesting the use of AI.",
      "s1.fig.desc": "Application Layer → AIGP-OS (Decision Authority) → AI Execution Layer. AIGP-OS decides ex-ante, before execution.",
      "s1.fig.t0": "t₀ · intent",
      "s1.fig.t1": "t₁ · decision",
      "s1.fig.t2": "t₂ · execution",
      "s1.fig.b1.tag": "01 · LAYER",
      "s1.fig.b1.title": "Application Layer",
      "s1.fig.b1.desc": "Software, services and workflows that request the use of AI.",
      "s1.fig.b2.tag": "02 · DECISION AUTHORITY",
      "s1.fig.b2.title": "AIGP-OS",
      "s1.fig.b2.desc": "Decides ex-ante whether AI may be invoked, under which conditions and with which evidence.",
      "s1.fig.b2.foot": "non-bypassable · OS-level",
      "s1.fig.b3.tag": "03 · LAYER",
      "s1.fig.b3.title": "AI Execution Layer",
      "s1.fig.b3.desc": "Model invocation, inference and return — subject to authorisation.",
      "s1.fig.arr1": "request",
      "s1.fig.arr2": "authorise",
      "s1.fig.cap": "Figure 1 — Position of AIGP-OS in the AI invocation chain. The authorisation decision is taken at t₁, before the execution of the model.",
      "s2.tag": "The problem",
      "s2.h2": "The problem.",
      "s2.p1": "AI governance today is entrusted almost exclusively to:",
      "s2.l1": "organisational policies,",
      "s2.l2": "documentation,",
      "s2.l3": "post-hoc controls,",
      "s2.l4": "application logs.",
      "s2.p2": "This approach is increasingly insufficient in regulated and critical contexts, where frameworks such as <b>AI Act</b>, <b>ISO/IEC 42001</b>, <b>ISO/IEC 27001</b> and <b>NIS2</b> require preventive controls, auditability and technical accountability.",
      "s2.p3": "A clear infrastructural layer in which to place this governance is missing.",
      "s3.tag": "Approach",
      "s3.h2": "The AIGP-OS approach.",
      "s3.intro": "AIGP-OS fills this gap by introducing:",
      "s3.p1.h": "Ex-ante authorisation of AI use.",
      "s3.p1.p": "Every invocation of AI is preceded by an explicit decision that determines whether the use is permitted, according to the rules of the governance in force.",
      "s3.p2.h": "Non-bypassable enforcement at the OS layer.",
      "s3.p2.p": "The enforcement point sits at the operating-system layer, not in the calling application: the decision cannot be ignored, rewritten or bypassed by the code requesting AI.",
      "s3.p3.h": "Audit by construction of decisions.",
      "s3.p3.p": "Every authorisation, refusal and applied condition produces, by construction, a verifiable record usable as technical evidence for internal and external audits.",
      "s3.p4.h": "Separation of availability and authorisation.",
      "s3.p4.p": "The fact that a model is technically available does not imply that its use is authorised. AIGP-OS explicitly distinguishes these two planes.",
      "s3.p5.h": "Neutrality across models, vendors and applications.",
      "s3.p5.p": "The protocol does not depend on a particular model, vendor or application. It defines a governance interface to which every implementation conforms.",
      "s3.note": "<strong>AIGP-OS does not analyse prompts or outputs.</strong> It governs the right to use AI, not its content.",
      "s4.tag": "Regulatory relevance",
      "s4.h2": "Regulatory relevance.",
      "s4.intro": "The protocol is intended as a technical enabler of compliance with the principal AI governance frameworks.",
      "s4.th1": "Reference framework",
      "s4.th2": "Contribution of AIGP-OS",
      "s4.r1.ref": "EU AI Act<em>Reg. (EU) 2024/1689</em>",
      "s4.r1.rel": "Ex-ante controls and <i>human oversight</i> over the use of AI systems, applied before invocation.",
      "s4.r2.ref": "ISO/IEC 42001<em>AI Management System</em>",
      "s4.r2.rel": "Technical layer for the traceability of decisions and the accountability of the AI management system.",
      "s4.r3.ref": "ISO/IEC 27001<em>Governance of critical capabilities</em>",
      "s4.r3.rel": "Treatment of AI as a critical capability of the information system, subject to access and privilege control.",
      "s4.r4.ref": "NIS2<em>Dir. (EU) 2022/2555</em>",
      "s4.r4.rel": "Risk management and technical accountability in essential and important services, with reconstructable evidence for incident notification.",
      "s5.tag": "Project status",
      "s5.h2": "Project status.",
      "s5.r1.l": "Definition",
      "s5.r1.v": "Protocol and architectural pattern.",
      "s5.r1.m": "<span class=\"dot\"></span>Active",
      "s5.r2.l": "Implementation",
      "s5.r2.v": "Enterprise reference implementation in development.",
      "s5.r2.m": "<span class=\"dot\"></span>In progress",
      "col.tag": "Colophon",
      "col.dt1": "Document", "col.dd1": "AIGP-OS / WD-0004",
      "col.dt2": "Stage", "col.dd2": "Working Draft",
      "col.dt3": "Editorship", "col.dd3": "AIGP-OS editorial group",
      "col.dt4": "Licence", "col.dd4": "Creative Commons Attribution 4.0 International",
      "col.bot1": "© 2026 AIGP-OS editorial group — Published as an open specification.",
      "col.bot2": "Last revised 11 May 2026 · WD-0004"
    },

    fr: {
      "doc.title": "AIGP-OS — Gouvernance de l'intelligence artificielle au niveau du système d'exploitation",
      "banner.l1": "Spécification ouverte",
      "banner.l2": "Brouillon de travail public",
      "banner.l3": "Maintenu par le groupe éditorial AIGP-OS",
      "mast.sub": "Spécification ouverte · v0.4",
      "mast.ref": "Réf. AIGP-OS / WD-0004 · 11 mai 2026",
      "cover.eyebrow": "AIGP-OS · Protocole de gouvernance",
      "cover.h1": "Gouvernance de l'intelligence artificielle au niveau du système d'exploitation<em>.</em>",
      "cover.sub": "AIGP-OS est un protocole de gouvernance de l'intelligence artificielle au niveau du système d'exploitation, conçu pour traiter l'IA comme une capacité critique de système, et non comme une simple bibliothèque ou fonctionnalité applicative.",
      "s1.tag": "Objectif",
      "s1.h2": "Un point de décision avant l'exécution.",
      "s1.lede": "L'objectif d'AIGP-OS est d'introduire un point de décision ex-ante, non contournable, qui détermine si et quand l'IA peut être invoquée, avant l'exécution.",
      "s1.p1": "La décision est prise indépendamment du modèle, du fournisseur et du logiciel appelant. Le protocole opère au niveau du système d'exploitation, là où l'autorisation précède l'invocation et ne peut être éludée par l'application qui demande l'usage de l'IA.",
      "s1.fig.desc": "Application Layer → AIGP-OS (Decision Authority) → AI Execution Layer. AIGP-OS décide ex-ante, avant l'exécution.",
      "s1.fig.t0": "t₀ · intention",
      "s1.fig.t1": "t₁ · décision",
      "s1.fig.t2": "t₂ · exécution",
      "s1.fig.b1.tag": "01 · COUCHE",
      "s1.fig.b1.title": "Application Layer",
      "s1.fig.b1.desc": "Logiciels, services et flux qui demandent l'usage de l'IA.",
      "s1.fig.b2.tag": "02 · DECISION AUTHORITY",
      "s1.fig.b2.title": "AIGP-OS",
      "s1.fig.b2.desc": "Décide ex-ante si l'IA peut être invoquée, à quelles conditions et avec quelles preuves.",
      "s1.fig.b2.foot": "non contournable · niveau OS",
      "s1.fig.b3.tag": "03 · COUCHE",
      "s1.fig.b3.title": "AI Execution Layer",
      "s1.fig.b3.desc": "Invocation du modèle, inférence et retour — soumis à autorisation.",
      "s1.fig.arr1": "requête",
      "s1.fig.arr2": "autorise",
      "s1.fig.cap": "Figure 1 — Position d'AIGP-OS dans la chaîne d'invocation de l'IA. La décision d'autorisation est prise à t₁, avant l'exécution du modèle.",
      "s2.tag": "Le problème",
      "s2.h2": "Le problème.",
      "s2.p1": "La gouvernance de l'IA est aujourd'hui confiée presque exclusivement à :",
      "s2.l1": "politiques organisationnelles,",
      "s2.l2": "documentation,",
      "s2.l3": "contrôles a posteriori,",
      "s2.l4": "journaux applicatifs.",
      "s2.p2": "Cette approche est de moins en moins suffisante dans les contextes réglementés et critiques, où des cadres tels que l'<b>AI Act</b>, l'<b>ISO/IEC 42001</b>, l'<b>ISO/IEC 27001</b> et la <b>NIS2</b> exigent des contrôles préventifs, l'auditabilité et la responsabilité technique.",
      "s2.p3": "Il manque une couche infrastructurelle claire où loger cette gouvernance.",
      "s3.tag": "Approche",
      "s3.h2": "L'approche AIGP-OS.",
      "s3.intro": "AIGP-OS comble ce vide en introduisant :",
      "s3.p1.h": "Autorisation ex-ante de l'usage de l'IA.",
      "s3.p1.p": "Chaque invocation de l'IA est précédée d'une décision explicite qui établit si l'usage est admis, conformément aux règles de la gouvernance en vigueur.",
      "s3.p2.h": "Application non contournable au niveau OS.",
      "s3.p2.p": "Le point d'application se situe au niveau du système d'exploitation, et non dans l'application appelante : la décision ne peut être ignorée, réécrite ou contournée par le code qui demande l'IA.",
      "s3.p3.h": "Audit par construction des décisions.",
      "s3.p3.p": "Toute autorisation, refus et condition appliquée produit, par construction, un enregistrement vérifiable, utilisable comme preuve technique pour les audits internes et externes.",
      "s3.p4.h": "Séparation entre disponibilité et autorisation.",
      "s3.p4.p": "Le fait qu'un modèle soit techniquement disponible n'implique pas que son usage soit autorisé. AIGP-OS distingue explicitement ces deux plans.",
      "s3.p5.h": "Neutralité à l'égard des modèles, fournisseurs et applications.",
      "s3.p5.p": "Le protocole ne dépend ni d'un modèle, ni d'un fournisseur, ni d'une application en particulier. Il définit une interface de gouvernance à laquelle toute implémentation se conforme.",
      "s3.note": "<strong>AIGP-OS n'analyse ni les <i>prompts</i> ni les sorties.</strong> Il gouverne le droit d'utiliser l'IA, non son contenu.",
      "s4.tag": "Pertinence normative",
      "s4.h2": "Pertinence normative.",
      "s4.intro": "Le protocole se veut un facilitateur technique de la conformité aux principaux cadres de gouvernance de l'IA.",
      "s4.th1": "Cadre de référence",
      "s4.th2": "Contribution d'AIGP-OS",
      "s4.r1.ref": "EU AI Act<em>Règl. (UE) 2024/1689</em>",
      "s4.r1.rel": "Contrôles ex-ante et <i>human oversight</i> sur l'usage des systèmes d'IA, appliqués avant l'invocation.",
      "s4.r2.ref": "ISO/IEC 42001<em>AI Management System</em>",
      "s4.r2.rel": "Couche technique pour la traçabilité des décisions et la responsabilité du système de management de l'IA.",
      "s4.r3.ref": "ISO/IEC 27001<em>Gouvernance des capacités critiques</em>",
      "s4.r3.rel": "Traitement de l'IA comme capacité critique du système d'information, soumise au contrôle des accès et des privilèges.",
      "s4.r4.ref": "NIS2<em>Dir. (UE) 2022/2555</em>",
      "s4.r4.rel": "Gestion du risque et responsabilité technique dans les services essentiels et importants, avec des preuves reconstructibles pour la notification d'incident.",
      "s5.tag": "État du projet",
      "s5.h2": "État du projet.",
      "s5.r1.l": "Définition",
      "s5.r1.v": "Protocole et patron d'architecture.",
      "s5.r1.m": "<span class=\"dot\"></span>Actif",
      "s5.r2.l": "Implémentation",
      "s5.r2.v": "Implémentation de référence entreprise en développement.",
      "s5.r2.m": "<span class=\"dot\"></span>En cours",
      "col.tag": "Colophon",
      "col.dt1": "Document", "col.dd1": "AIGP-OS / WD-0004",
      "col.dt2": "Étape", "col.dd2": "Working Draft",
      "col.dt3": "Direction éditoriale", "col.dd3": "Groupe éditorial AIGP-OS",
      "col.dt4": "Licence", "col.dd4": "Creative Commons Attribution 4.0 International",
      "col.bot1": "© 2026 Groupe éditorial AIGP-OS — Publié comme spécification ouverte.",
      "col.bot2": "Dernière révision 11 mai 2026 · WD-0004"
    },

    es: {
      "doc.title": "AIGP-OS — Gobernanza de la inteligencia artificial a nivel de sistema operativo",
      "banner.l1": "Especificación abierta",
      "banner.l2": "Borrador público de trabajo",
      "banner.l3": "Mantenido por el grupo editorial AIGP-OS",
      "mast.sub": "Especificación abierta · v0.4",
      "mast.ref": "Ref. AIGP-OS / WD-0004 · 11 de mayo de 2026",
      "cover.eyebrow": "AIGP-OS · Protocolo de gobernanza",
      "cover.h1": "Gobernanza de la inteligencia artificial a nivel de sistema operativo<em>.</em>",
      "cover.sub": "AIGP-OS es un protocolo de gobernanza de la inteligencia artificial a nivel de sistema operativo, diseñado para tratar la IA como una capacidad crítica del sistema, y no como una simple biblioteca o funcionalidad de aplicación.",
      "s1.tag": "Objetivo",
      "s1.h2": "Un punto de decisión antes de la ejecución.",
      "s1.lede": "El objetivo de AIGP-OS es introducir un punto de decisión ex-ante, no eludible, que determine si y cuándo la IA puede ser invocada, antes de la ejecución.",
      "s1.p1": "La decisión se toma con independencia del modelo, del proveedor y del software que la solicita. El protocolo opera en la capa del sistema operativo, donde la autorización precede a la invocación y no puede ser eludida por la aplicación que requiere el uso de la IA.",
      "s1.fig.desc": "Application Layer → AIGP-OS (Decision Authority) → AI Execution Layer. AIGP-OS decide ex-ante, antes de la ejecución.",
      "s1.fig.t0": "t₀ · intención",
      "s1.fig.t1": "t₁ · decisión",
      "s1.fig.t2": "t₂ · ejecución",
      "s1.fig.b1.tag": "01 · CAPA",
      "s1.fig.b1.title": "Application Layer",
      "s1.fig.b1.desc": "Software, servicios y flujos que solicitan el uso de la IA.",
      "s1.fig.b2.tag": "02 · DECISION AUTHORITY",
      "s1.fig.b2.title": "AIGP-OS",
      "s1.fig.b2.desc": "Decide ex-ante si la IA puede ser invocada, en qué condiciones y con qué evidencias.",
      "s1.fig.b2.foot": "no eludible · nivel SO",
      "s1.fig.b3.tag": "03 · CAPA",
      "s1.fig.b3.title": "AI Execution Layer",
      "s1.fig.b3.desc": "Invocación del modelo, inferencia y retorno — sujetos a autorización.",
      "s1.fig.arr1": "solicitud",
      "s1.fig.arr2": "autoriza",
      "s1.fig.cap": "Figura 1 — Posición de AIGP-OS en la cadena de invocación de la IA. La decisión de autorización se toma en t₁, antes de la ejecución del modelo.",
      "s2.tag": "El problema",
      "s2.h2": "El problema.",
      "s2.p1": "Hoy la gobernanza de la IA recae casi exclusivamente en:",
      "s2.l1": "políticas organizativas,",
      "s2.l2": "documentación,",
      "s2.l3": "controles ex post,",
      "s2.l4": "registros de aplicación.",
      "s2.p2": "Este enfoque es cada vez menos suficiente en contextos regulados y críticos, donde marcos como el <b>AI Act</b>, <b>ISO/IEC 42001</b>, <b>ISO/IEC 27001</b> y <b>NIS2</b> exigen controles preventivos, auditabilidad y responsabilidad técnica.",
      "s2.p3": "Falta una capa de infraestructura clara en la que ubicar esta gobernanza.",
      "s3.tag": "Enfoque",
      "s3.h2": "El enfoque AIGP-OS.",
      "s3.intro": "AIGP-OS cubre este vacío introduciendo:",
      "s3.p1.h": "Autorización ex-ante del uso de la IA.",
      "s3.p1.p": "Cada invocación de la IA va precedida por una decisión explícita que determina si el uso es admisible, conforme a las reglas de la gobernanza vigente.",
      "s3.p2.h": "Aplicación no eludible a nivel de SO.",
      "s3.p2.p": "El punto de aplicación reside en la capa del sistema operativo, no en la aplicación que invoca: la decisión no puede ser ignorada, reescrita ni eludida por el código que solicita la IA.",
      "s3.p3.h": "Auditoría por construcción de las decisiones.",
      "s3.p3.p": "Toda autorización, denegación y condición aplicada produce, por construcción, un registro verificable, utilizable como evidencia técnica para auditorías internas y externas.",
      "s3.p4.h": "Separación entre disponibilidad y autorización.",
      "s3.p4.p": "El hecho de que un modelo esté técnicamente disponible no implica que su uso esté autorizado. AIGP-OS distingue de manera explícita estos dos planos.",
      "s3.p5.h": "Neutralidad frente a modelos, proveedores y aplicaciones.",
      "s3.p5.p": "El protocolo no depende de un modelo, proveedor o aplicación concretos. Define una interfaz de gobernanza a la que toda implementación se ajusta.",
      "s3.note": "<strong>AIGP-OS no analiza <i>prompts</i> ni salidas.</strong> Gobierna el derecho de usar la IA, no su contenido.",
      "s4.tag": "Relevancia normativa",
      "s4.h2": "Relevancia normativa.",
      "s4.intro": "El protocolo se concibe como facilitador técnico del cumplimiento de los principales marcos de gobernanza de la IA.",
      "s4.th1": "Marco de referencia",
      "s4.th2": "Contribución de AIGP-OS",
      "s4.r1.ref": "EU AI Act<em>Regl. (UE) 2024/1689</em>",
      "s4.r1.rel": "Controles ex-ante y <i>human oversight</i> sobre el uso de los sistemas de IA, aplicados antes de la invocación.",
      "s4.r2.ref": "ISO/IEC 42001<em>AI Management System</em>",
      "s4.r2.rel": "Capa técnica para la trazabilidad de las decisiones y la responsabilidad del sistema de gestión para la IA.",
      "s4.r3.ref": "ISO/IEC 27001<em>Gobernanza de las capacidades críticas</em>",
      "s4.r3.rel": "Tratamiento de la IA como capacidad crítica del sistema de información, sujeta a control de accesos y privilegios.",
      "s4.r4.ref": "NIS2<em>Dir. (UE) 2022/2555</em>",
      "s4.r4.rel": "Gestión del riesgo y responsabilidad técnica en los servicios esenciales e importantes, con evidencias reconstruibles para la notificación de incidentes.",
      "s5.tag": "Estado del proyecto",
      "s5.h2": "Estado del proyecto.",
      "s5.r1.l": "Definición",
      "s5.r1.v": "Protocolo y patrón arquitectónico.",
      "s5.r1.m": "<span class=\"dot\"></span>Activo",
      "s5.r2.l": "Implementación",
      "s5.r2.v": "Implementación de referencia para empresas en desarrollo.",
      "s5.r2.m": "<span class=\"dot\"></span>En curso",
      "col.tag": "Colofón",
      "col.dt1": "Documento", "col.dd1": "AIGP-OS / WD-0004",
      "col.dt2": "Etapa", "col.dd2": "Working Draft",
      "col.dt3": "Curaduría", "col.dd3": "Grupo editorial AIGP-OS",
      "col.dt4": "Licencia", "col.dd4": "Creative Commons Attribution 4.0 Internacional",
      "col.bot1": "© 2026 Grupo editorial AIGP-OS — Publicado como especificación abierta.",
      "col.bot2": "Última revisión 11 de mayo de 2026 · WD-0004"
    }
  };

  var original = {};
  function snapshot() {
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute("data-i18n");
      if (!(k in original)) original[k] = nodes[i].innerHTML;
    }
  }

  function apply(lang) {
    if (LANGS.indexOf(lang) === -1) lang = "it";
    document.documentElement.lang = lang;
    var src = lang === "it" ? null : dict[lang];
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var k = el.getAttribute("data-i18n");
      var v = src && src[k] != null ? src[k] : original[k];
      if (v != null && el.innerHTML !== v) el.innerHTML = v;
    }
    if (src && src["doc.title"]) document.title = src["doc.title"];
    else if (original["doc.title"]) document.title = original["doc.title"];

    var opts = document.querySelectorAll(".lang__opt");
    for (var j = 0; j < opts.length; j++) {
      var active = opts[j].getAttribute("data-lang") === lang;
      opts[j].classList.toggle("is-active", active);
      if (active) opts[j].setAttribute("aria-current", "true");
      else opts[j].removeAttribute("aria-current");
    }
  }

  function init() {
    snapshot();
    var params = new URLSearchParams(window.location.search);
    var fromUrl = params.get("lang");
    var fromStore = null;
    try { fromStore = localStorage.getItem("aigp_lang"); } catch (e) {}
    var nav = (navigator.language || "it").slice(0, 2).toLowerCase();
    var pick = fromUrl || fromStore || (LANGS.indexOf(nav) !== -1 ? nav : "it");
    if (LANGS.indexOf(pick) === -1) pick = "it";
    apply(pick);

    var opts = document.querySelectorAll(".lang__opt");
    for (var i = 0; i < opts.length; i++) {
      opts[i].addEventListener("click", function (e) {
        e.preventDefault();
        var l = this.getAttribute("data-lang");
        try { localStorage.setItem("aigp_lang", l); } catch (e2) {}
        var u = new URL(window.location.href);
        u.searchParams.set("lang", l);
        window.history.replaceState({}, "", u);
        apply(l);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
