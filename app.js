(function () {
  "use strict";

  /* ── PAFOI fallback specification (used when site-spec.json cannot load) ── */
  var FALLBACK_SPEC = {
    site: {
      name: "PAFOI",
      tagline: "A place to share and grow idea seeds into living systems of action."
    },
    nav: [
      { label: "About", href: "#about" },
      { label: "What We Grow", href: "#themes" },
      { label: "Let\u2019s Placemake", href: "#placemake" },
      { label: "Idea Seeds", href: "#featured" },
      { label: "Contact", href: "#contact" }
    ],
    sections: {
      hero: {
        eyebrow: "Plant a Forest of Ideas",
        heading: "Grow ideas into living systems of action.",
        description: "Plant a Forest of Ideas (PAFOI) is a place to share, grow and connect idea seeds through people, conversations, collaborations, stories, projects and places.",
        ctaText: "Explore the idea seeds"
      },
      about: {
        heading: "A place for ideas to take root.",
        content: "Plant a Forest of Ideas (PAFOI) is a platform for sharing idea seeds and developing them into practical initiatives, stories, collaborations and places. It is a place to bring questions, possibilities and early ideas into conversation, learning, relationship and action.\n\nIdeas become stronger through people, shared inquiry, experiments, stories, projects, local activity and stewardship."
      },
      themes: {
        heading: "What we grow together.",
        items: [
          { icon: "ideas", title: "Ideas", description: "Questions, possibilities, stories, frameworks and early seeds that deserve attention, care and development." },
          { icon: "people", title: "People", description: "Contributors, practitioners, neighbours, collaborators and communities gathered around ideas that matter." },
          { icon: "action", title: "Action", description: "Turning shared inquiry into experiments, projects, gatherings, stories, places and practical next steps." }
        ]
      },
      placemake: {
        heading: "Let\u2019s Placemake",
        content: "Let\u2019s Placemake is PAFOI\u2019s outreach programme for bringing ideas into shared spaces, conversations and practical local action."
      },
      featured: {
        heading: "Featured idea seeds",
        items: [
          { title: "Idea seed in development", description: "A placeholder for an idea seed currently being explored." },
          { title: "Conversation to be planted", description: "A placeholder for a future conversation or gathering." },
          { title: "Project taking root", description: "A placeholder for a project in its early stages." }
        ]
      },
      cta: {
        heading: "Join, collaborate or host.",
        description: "Bring an idea, start a conversation, collaborate, contribute, host a gathering or explore a local initiative.",
        buttonText: "Start a conversation"
      },
      footer: {
        organisationName: "PAFOI",
        email: null,
        year: 2026
      }
    }
  };

  var FALLBACK_NOTE = "This is a draft preview of Plant a Forest of Ideas (PAFOI). Contact details and external links will be added before release.";

  var dataEl = document.getElementById("site-data");
  var localNote = document.getElementById("local-preview-note");
  var usingFallback = false;

  /* ── SVG glyph map for "What We Grow" cards ── */
  var GLYPH_MAP = {
    ideas: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="22" r="10" fill="currentColor" opacity="0.12"/><ellipse cx="20" cy="16" rx="5" ry="8" fill="currentColor" opacity="0.25"/><line x1="20" y1="24" x2="20" y2="34" stroke="currentColor" stroke-width="1.5" opacity="0.4"/><line x1="16" y1="30" x2="20" y2="28" stroke="currentColor" stroke-width="1" opacity="0.3"/><line x1="24" y1="29" x2="20" y2="27" stroke="currentColor" stroke-width="1" opacity="0.3"/></svg>',
    people: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="14" cy="18" r="6" fill="currentColor" opacity="0.15"/><circle cx="26" cy="18" r="6" fill="currentColor" opacity="0.15"/><circle cx="20" cy="26" r="6" fill="currentColor" opacity="0.15"/><circle cx="14" cy="18" r="3" fill="currentColor" opacity="0.3"/><circle cx="26" cy="18" r="3" fill="currentColor" opacity="0.3"/><circle cx="20" cy="26" r="3" fill="currentColor" opacity="0.3"/><line x1="17" y1="20" x2="19" y2="23" stroke="currentColor" stroke-width="1" opacity="0.35"/><line x1="23" y1="20" x2="21" y2="23" stroke="currentColor" stroke-width="1" opacity="0.35"/><line x1="17" y1="18" x2="23" y2="18" stroke="currentColor" stroke-width="1" opacity="0.25"/></svg>',
    action: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="M10 28 L20 12 L30 28" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.35"/><path d="M14 24 L20 16 L26 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.25"/><circle cx="20" cy="12" r="2" fill="currentColor" opacity="0.4"/><line x1="20" y1="28" x2="20" y2="34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/><line x1="16" y1="32" x2="20" y2="34" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.25"/><line x1="24" y1="32" x2="20" y2="34" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.25"/></svg>'
  };

  /* ── Safe SVG icon creation via createElementNS ── */
  function makeCardIcon(iconKey) {
    var glyph = GLYPH_MAP[iconKey];
    if (glyph) {
      var wrapper = document.createElement("div");
      wrapper.innerHTML = glyph;
      return wrapper.firstChild;
    }
    /* Generic fallback */
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 40 40");
    svg.setAttribute("fill", "none");
    var outerRect = document.createElementNS(NS, "rect");
    outerRect.setAttribute("x", "4");
    outerRect.setAttribute("y", "4");
    outerRect.setAttribute("width", "32");
    outerRect.setAttribute("height", "32");
    outerRect.setAttribute("rx", "8");
    outerRect.setAttribute("fill", "currentColor");
    outerRect.setAttribute("opacity", "0.15");
    svg.appendChild(outerRect);
    var innerRect = document.createElementNS(NS, "rect");
    innerRect.setAttribute("x", "12");
    innerRect.setAttribute("y", "12");
    innerRect.setAttribute("width", "16");
    innerRect.setAttribute("height", "16");
    innerRect.setAttribute("rx", "4");
    innerRect.setAttribute("fill", "currentColor");
    innerRect.setAttribute("opacity", "0.3");
    svg.appendChild(innerRect);
    return svg;
  }

  /* ── Generic card builder ── */
  function makeCard(item) {
    var card = document.createElement("div");
    card.className = "card fade-in";

    if (item.icon) {
      var iconWrap = document.createElement("div");
      iconWrap.className = "card-icon";
      var iconSvg = makeCardIcon(item.icon);
      iconWrap.appendChild(iconSvg);
      card.appendChild(iconWrap);
    }

    if (item.title) {
      var h3 = document.createElement("h3");
      h3.textContent = item.title;
      card.appendChild(h3);
    }

    if (item.description) {
      var p = document.createElement("p");
      p.textContent = item.description;
      card.appendChild(p);
    }

    return card;
  }

  /* ── Populate the page from spec data ── */
  function populate(data) {
    var s = data.site || {};
    var sec = data.sections || {};
    var nav = data.nav || [];

    /* Site title */
    var titleEl = document.getElementById("site-title");
    if (titleEl) titleEl.textContent = s.name || "PAFOI";

    /* Nav links — replace shell content */
    var navD = document.getElementById("nav-links-desktop");
    var navM = document.getElementById("nav-links-mobile");
    if (navD && nav.length) {
      navD.innerHTML = "";
      nav.forEach(function (item) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.label;
        li.appendChild(a);
        navD.appendChild(li);
      });
    }
    if (navM && nav.length) {
      navM.innerHTML = "";
      nav.forEach(function (item) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = item.href;
        a.textContent = item.label;
        li.appendChild(a);
        navM.appendChild(li);
      });
    }

    /* Hero */
    var hero = sec.hero || {};
    var eyEl = document.getElementById("hero-eyebrow");
    if (eyEl) eyEl.textContent = hero.eyebrow || "Plant a Forest of Ideas";
    var hEl = document.getElementById("hero-heading");
    if (hEl) hEl.textContent = hero.heading || "";
    var hdEl = document.getElementById("hero-description");
    if (hdEl) hdEl.textContent = hero.description || "";
    var ctaEl = document.getElementById("hero-cta");
    if (ctaEl) {
      ctaEl.textContent = hero.ctaText || "Explore the idea seeds";
      ctaEl.href = "#featured";
    }

    /* About */
    var about = sec.about || {};
    var aH = document.getElementById("about-heading");
    if (aH) aH.textContent = about.heading || "";
    var aC = document.getElementById("about-content");
    if (aC) aC.textContent = about.content || "";

    /* Themes cards */
    var themes = sec.themes || {};
    var tH = document.getElementById("themes-heading");
    if (tH) tH.textContent = themes.heading || "";
    var tG = document.getElementById("themes-grid");
    if (tG && themes.items) {
      tG.innerHTML = "";
      themes.items.forEach(function (item) {
        tG.appendChild(makeCard(item));
      });
    }

    /* Placemake */
    var pm = sec.placemake || {};
    var pmH = document.getElementById("placemake-heading");
    if (pmH) pmH.textContent = pm.heading || "Let\u2019s Placemake";
    var pmC = document.getElementById("placemake-content");
    if (pmC) pmC.textContent = pm.content || "";
    var pmCTA = document.getElementById("placemake-cta");
    if (pmCTA) {
      pmCTA.href = "#contact";
    }

    /* Featured cards */
    var feat = sec.featured || {};
    var fH = document.getElementById("featured-heading");
    if (fH) fH.textContent = feat.heading || "";
    var fG = document.getElementById("featured-grid");
    if (fG && feat.items) {
      fG.innerHTML = "";
      feat.items.forEach(function (item) {
        fG.appendChild(makeCard(item));
      });
    }

    /* CTA */
    var cta = sec.cta || {};
    var ctH = document.getElementById("cta-heading");
    if (ctH) ctH.textContent = cta.heading || "";
    var ctD = document.getElementById("cta-description");
    if (ctD) ctD.textContent = cta.description || "";
    var ctB = document.getElementById("cta-button");
    if (ctB) {
      ctB.textContent = cta.buttonText || "Start a conversation";
      ctB.href = "#contact";
    }

    /* Footer */
    var foot = sec.footer || {};
    var fOrg = document.getElementById("footer-org");
    if (fOrg) fOrg.textContent = foot.organisationName || "PAFOI";
    var fEm = document.getElementById("footer-email");
    if (fEm) {
      if (foot.email && typeof foot.email === "string") {
        fEm.textContent = foot.email;
      } else {
        fEm.textContent = "Contact details will be added before release.";
      }
    }
    var fC = document.getElementById("footer-copy");
    if (fC) {
      fC.textContent = "PAFOI \u2014 Plant a Forest of Ideas. Draft website content.";
    }
  }

  /* ── Load site-spec.json, fall back to inline or hardcoded spec ── */
  function loadData() {
    if (typeof fetch === "function") {
      fetch("site-spec.json")
        .then(function (r) {
          if (!r.ok) throw new Error("HTTP " + r.status);
          return r.json();
        })
        .then(function (data) {
          populate(data);
        })
        .catch(function () {
          useFallback();
        });
    } else {
      useFallback();
    }
  }

  function useFallback() {
    usingFallback = true;
    var data = FALLBACK_SPEC;

    /* Try inline <script type="application/json"> first */
    try {
      if (dataEl && dataEl.textContent) {
        var inline = JSON.parse(dataEl.textContent);
        if (inline && inline.sections) {
          data = inline;
        }
      }
    } catch (e) {
      /* Inline parse failed — use hardcoded FALLBACK_SPEC */
    }

    populate(data);

    /* Show fallback note */
    if (localNote) {
      localNote.removeAttribute("hidden");
      localNote.textContent = FALLBACK_NOTE;
    }
  }

  loadData();

  /* ── Mobile navigation toggle ── */
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.getElementById("nav-panel");

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      panel.classList.toggle("is-open");
    });

    /* Close on panel link click */
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        panel.classList.remove("is-open");
      });
    });

    /* Close on Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        toggle.setAttribute("aria-expanded", "false");
        panel.classList.remove("is-open");
        toggle.focus();
      }
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.addEventListener("click", function (e) {
    var anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    var target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", anchor.getAttribute("href"));
    }
  });

  /* ── Fade-in on scroll (IntersectionObserver) ── */
  function observeFadeIns() {
    var fadeEls = document.querySelectorAll(".fade-in");
    if (!("IntersectionObserver" in window) || !fadeEls.length) {
      fadeEls.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeEls.forEach(function (el) { observer.observe(el); });
  }

  setTimeout(observeFadeIns, 50);

})();
