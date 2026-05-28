import { useState, useEffect, useCallback } from "react";

// ─── THEME ───────────────────────────────────────────────────────────────────
const T = {
  bg:       "#FAF6F0",
  bg2:      "#F2EBE0",
  card:     "#FFFFFF",
  border:   "#E0D5C8",
  text:     "#2C1F14",
  muted:    "#8A7060",
  accent:   "#C2622B",
  accent2:  "#4A7C59",
  cream:    "#FDF9F4",
  shadow:   "rgba(44,31,20,0.10)",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const PRODUCTOS = [
  {
    id: 1,
    nombre: "Jarrones de Barro",
    descripcion: "Piezas únicas modeladas a mano con arcilla natural. Perfectas para decorar tu hogar.",
    precio: "$350",
    emoji: "🏺",
    color: "#C2622B",
  },
  {
    id: 2,
    nombre: "Bolsas Tejidas",
    descripcion: "Tejidas con fibras naturales de palma. Resistentes, ligeras y llenas de color.",
    precio: "$280",
    emoji: "👜",
    color: "#4A7C59",
  },
  {
    id: 3,
    nombre: "Velas Artesanales",
    descripcion: "Elaboradas con cera de abeja y aceites esenciales. Aromas que relajan y envuelven.",
    precio: "$120",
    emoji: "🕯️",
    color: "#B5824A",
  },
  {
    id: 4,
    nombre: "Cuadros en Textil",
    descripcion: "Arte bordado a mano con diseños tradicionales inspirados en la naturaleza.",
    precio: "$450",
    emoji: "🧵",
    color: "#7A5C8A",
  },
  {
    id: 5,
    nombre: "Macetas Pintadas",
    descripcion: "Macetas de barro con patrones pintados a mano. Cada una es irrepetible.",
    precio: "$200",
    emoji: "🪴",
    color: "#4A7C59",
  },
  {
    id: 6,
    nombre: "Collares de Semillas",
    descripcion: "Joyería natural elaborada con semillas, conchas y piedras del río.",
    precio: "$180",
    emoji: "📿",
    color: "#C2622B",
  },
];

const WHATSAPP_NUMBER = "5215512345678"; // ← Cambia este número por el tuyo

// ─── COMPONENTES ─────────────────────────────────────────────────────────────

function Toast({ msg, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div style={{
      position: "fixed", bottom: 32, left: "50%",
      transform: "translateX(-50%)",
      background: T.accent2, color: "#fff",
      padding: "14px 28px", borderRadius: 50,
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600, fontSize: 15,
      boxShadow: `0 8px 32px rgba(74,124,89,0.4)`,
      zIndex: 9999, animation: "slideUp 0.4s cubic-bezier(0.34,1.2,0.64,1)",
    }}>
      {msg}
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 5%",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      background: scrolled ? "rgba(250,246,240,0.92)" : "transparent",
      borderBottom: scrolled ? `1px solid ${T.border}` : "none",
      transition: "all 0.4s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 70,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ fontSize: 28 }}>🌿</span>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22, fontWeight: 700,
          color: T.text, letterSpacing: "0.02em",
        }}>Manos que Crean</span>
      </div>
      <nav style={{ display: "flex", gap: 28 }}>
        {["Productos", "Nosotros", "Pedidos"].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontFamily: "'DM Sans', sans-serif",
            color: T.muted, textDecoration: "none",
            fontSize: 14, fontWeight: 500,
            transition: "color 0.2s",
          }}
            onMouseEnter={e => e.target.style.color = T.accent}
            onMouseLeave={e => e.target.style.color = T.muted}
          >{item}</a>
        ))}
      </nav>
    </header>
  );
}

function Hero({ show }) {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola! Me interesa conocer más sobre sus artesanías 🌿")}`;
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", flexDirection: "column",
      textAlign: "center", padding: "120px 5% 80px",
      background: `radial-gradient(ellipse at 60% 40%, #E8D5BE55 0%, transparent 60%),
                   radial-gradient(ellipse at 20% 80%, #C2622B22 0%, transparent 50%),
                   ${T.bg}`,
      position: "relative", overflow: "hidden",
    }}>
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "15%", right: "10%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, #C2622B18 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "5%",
        width: 200, height: 200, borderRadius: "50%",
        background: "radial-gradient(circle, #4A7C5922 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.9s cubic-bezier(0.34,1.2,0.64,1)",
      }}>
        <span style={{
          display: "inline-block",
          background: `${T.accent}18`,
          color: T.accent, borderRadius: 50,
          padding: "6px 18px", fontSize: 13,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600, letterSpacing: "0.08em",
          marginBottom: 24,
          border: `1px solid ${T.accent}33`,
        }}>✦ HECHO A MANO CON AMOR</span>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(48px, 8vw, 96px)",
          fontWeight: 700, lineHeight: 1.05,
          color: T.text, margin: "0 0 24px",
          maxWidth: 800,
        }}>
          Arte que nace<br />
          <em style={{ color: T.accent }}>de tus manos</em>
        </h1>

        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(16px, 2vw, 20px)",
          color: T.muted, maxWidth: 520,
          margin: "0 auto 48px", lineHeight: 1.7,
        }}>
          Piezas únicas elaboradas con materiales naturales y técnicas
          ancestrales. Cada artesanía cuenta una historia.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#productos" style={{
            background: T.accent, color: "#fff",
            padding: "16px 36px", borderRadius: 50,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700, fontSize: 15,
            textDecoration: "none",
            boxShadow: `0 8px 28px ${T.accent}44`,
            transition: "all 0.3s",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = `0 14px 36px ${T.accent}55`; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = `0 8px 28px ${T.accent}44`; }}
          >Ver colección →</a>
          <a href={waLink} target="_blank" rel="noreferrer" style={{
            background: "transparent", color: T.text,
            padding: "16px 36px", borderRadius: 50,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600, fontSize: 15,
            textDecoration: "none",
            border: `2px solid ${T.border}`,
            transition: "all 0.3s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = T.accent2; e.target.style.color = T.accent2; }}
            onMouseLeave={e => { e.target.style.borderColor = T.border; e.target.style.color = T.text; }}
          >💬 WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p, show, delay, onWhatsApp }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: T.card,
        borderRadius: 20,
        border: `1px solid ${hov ? p.color + "44" : T.border}`,
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.34,1.2,0.64,1)",
        transform: hov ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hov ? `0 20px 48px ${p.color}22` : `0 2px 12px ${T.shadow}`,
        opacity: show ? 1 : 0,
        transitionDelay: `${delay}ms`,
        cursor: "default",
      }}
    >
      {/* Emoji zone */}
      <div style={{
        height: 160, display: "flex",
        alignItems: "center", justifyContent: "center",
        background: `linear-gradient(135deg, ${p.color}12 0%, ${p.color}06 100%)`,
        fontSize: 64, transition: "transform 0.3s",
        transform: hov ? "scale(1.1)" : "scale(1)",
      }}>
        {p.emoji}
      </div>

      <div style={{ padding: "20px 24px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22, fontWeight: 700,
            color: T.text, margin: 0,
          }}>{p.nombre}</h3>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700, fontSize: 18,
            color: p.color,
          }}>{p.precio}</span>
        </div>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14, color: T.muted,
          lineHeight: 1.6, margin: "0 0 20px",
        }}>{p.descripcion}</p>

        <button onClick={() => onWhatsApp(p)} style={{
          width: "100%", padding: "12px",
          background: `${p.color}15`,
          color: p.color, border: `1.5px solid ${p.color}44`,
          borderRadius: 12,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700, fontSize: 14,
          cursor: "pointer", transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.target.style.background = p.color; e.target.style.color = "#fff"; }}
          onMouseLeave={e => { e.target.style.background = `${p.color}15`; e.target.style.color = p.color; }}
        >
          Pedir por WhatsApp 💬
        </button>
      </div>
    </div>
  );
}

function Productos({ show }) {
  const handleWhatsApp = useCallback((p) => {
    const msg = encodeURIComponent(`¡Hola! Me interesa el/la *${p.nombre}* (${p.precio}). ¿Tienen disponibilidad? 🌿`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  }, []);

  return (
    <section id="productos" style={{ padding: "100px 5%", background: T.bg2 }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12, fontWeight: 700,
          color: T.muted, letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}>Nuestra Colección</span>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(36px, 5vw, 56px)",
          fontWeight: 700, color: T.text,
          margin: "12px 0 16px",
        }}>Piezas que enamoran</h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          color: T.muted, maxWidth: 480,
          margin: "0 auto", fontSize: 16, lineHeight: 1.7,
        }}>Cada pieza es irrepetible. Lo que ves hoy puede no estar mañana.</p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 28, maxWidth: 1100, margin: "0 auto",
      }}>
        {PRODUCTOS.map((p, i) => (
          <ProductCard key={p.id} p={p} show={show} delay={i * 80} onWhatsApp={handleWhatsApp} />
        ))}
      </div>
    </section>
  );
}

function Nosotros({ show }) {
  return (
    <section id="nosotros" style={{
      padding: "100px 5%",
      background: T.bg,
      display: "flex", flexWrap: "wrap",
      alignItems: "center", justifyContent: "center", gap: 60,
    }}>
      <div style={{
        fontSize: 120, lineHeight: 1,
        opacity: show ? 1 : 0,
        transform: show ? "rotate(-5deg)" : "rotate(-15deg)",
        transition: "all 1s cubic-bezier(0.34,1.2,0.64,1) 0.2s",
      }}>🌺</div>

      <div style={{ maxWidth: 540, opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(30px)", transition: "all 0.9s 0.3s" }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 12, fontWeight: 700,
          color: T.muted, letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}>Quiénes somos</span>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 700, color: T.text,
          margin: "12px 0 24px", lineHeight: 1.15,
        }}>Tradición que<br /><em style={{ color: T.accent }}>vive en tus manos</em></h2>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          color: T.muted, fontSize: 16, lineHeight: 1.8,
          margin: "0 0 20px",
        }}>
          Somos un taller familiar con más de 15 años creando piezas artesanales.
          Cada producto nace de materiales naturales cuidadosamente seleccionados
          y técnicas aprendidas de generación en generación.
        </p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          color: T.muted, fontSize: 16, lineHeight: 1.8,
        }}>
          Creemos que cada hogar merece objetos con alma — piezas que cuenten
          historias y conecten a las personas con lo auténtico.
        </p>

        <div style={{ display: "flex", gap: 32, marginTop: 36, flexWrap: "wrap" }}>
          {[["15+", "años de experiencia"], ["500+", "piezas vendidas"], ["100%", "hecho a mano"]].map(([n, l]) => (
            <div key={n}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, fontWeight: 700, color: T.accent }}>{n}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", color: T.muted, fontSize: 13 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pedidos({ show, onToast }) {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", producto: "", mensaje: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.nombre || !form.email || !form.producto) {
      onToast("⚠️ Por favor llena los campos obligatorios");
      return;
    }
    setSending(true);
    // Aquí puedes integrar EmailJS, Formspree, etc.
    // Por ahora redirigimos a WhatsApp con el mensaje del formulario
    const msg = encodeURIComponent(
      `¡Hola! Me llamo *${form.nombre}* y quiero hacer un pedido.\n\n` +
      `📦 Producto: ${form.producto}\n` +
      `📧 Email: ${form.email}\n` +
      `📱 Teléfono: ${form.telefono || "No indicado"}\n\n` +
      `💬 Mensaje: ${form.mensaje || "Sin mensaje adicional"}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      setForm({ nombre: "", email: "", telefono: "", producto: "", mensaje: "" });
      setSending(false);
      onToast("✅ ¡Pedido enviado por WhatsApp!");
    }, 800);
  };

  const inputStyle = {
    width: "100%", padding: "14px 16px",
    background: T.bg, border: `1.5px solid ${T.border}`,
    borderRadius: 12, fontSize: 15,
    fontFamily: "'DM Sans', sans-serif",
    color: T.text, outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  };

  return (
    <section id="pedidos" style={{ padding: "100px 5%", background: T.bg2 }}>
      <div style={{
        maxWidth: 600, margin: "0 auto",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.9s cubic-bezier(0.34,1.2,0.64,1)",
      }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 12, fontWeight: 700,
            color: T.muted, letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}>Haz tu pedido</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 700, color: T.text,
            margin: "12px 0 12px",
          }}>¿Te llevás algo?</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: T.muted, fontSize: 16 }}>
            Llena el formulario y te contactamos por WhatsApp en menos de 24 horas.
          </p>
        </div>

        <div style={{
          background: T.card, borderRadius: 24,
          padding: "40px", boxShadow: `0 4px 24px ${T.shadow}`,
          border: `1px solid ${T.border}`,
          display: "flex", flexDirection: "column", gap: 20,
        }}>
          {[
            { name: "nombre", label: "Nombre completo *", placeholder: "Tu nombre", type: "text" },
            { name: "email", label: "Correo electrónico *", placeholder: "tu@correo.com", type: "email" },
            { name: "telefono", label: "Teléfono (opcional)", placeholder: "+52 55 1234 5678", type: "tel" },
          ].map(f => (
            <div key={f.name}>
              <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: T.text, display: "block", marginBottom: 8 }}>{f.label}</label>
              <input
                type={f.type} name={f.name} value={form[f.name]}
                onChange={handleChange} placeholder={f.placeholder}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = T.accent}
                onBlur={e => e.target.style.borderColor = T.border}
              />
            </div>
          ))}

          <div>
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: T.text, display: "block", marginBottom: 8 }}>¿Qué producto te interesa? *</label>
            <select
              name="producto" value={form.producto} onChange={handleChange}
              style={{ ...inputStyle, cursor: "pointer" }}
              onFocus={e => e.target.style.borderColor = T.accent}
              onBlur={e => e.target.style.borderColor = T.border}
            >
              <option value="">Selecciona un producto...</option>
              {PRODUCTOS.map(p => <option key={p.id} value={p.nombre}>{p.emoji} {p.nombre} — {p.precio}</option>)}
              <option value="Otro">Otro / consulta personalizada</option>
            </select>
          </div>

          <div>
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: T.text, display: "block", marginBottom: 8 }}>Mensaje adicional</label>
            <textarea
              name="mensaje" value={form.mensaje} onChange={handleChange}
              placeholder="¿Algún detalle especial, color preferido, o pregunta? ✍️"
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={e => e.target.style.borderColor = T.accent}
              onBlur={e => e.target.style.borderColor = T.border}
            />
          </div>

          <button onClick={handleSubmit} disabled={sending} style={{
            background: sending ? T.muted : T.accent,
            color: "#fff", border: "none",
            padding: "16px", borderRadius: 14,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700, fontSize: 16,
            cursor: sending ? "not-allowed" : "pointer",
            transition: "all 0.3s",
            boxShadow: `0 8px 24px ${T.accent}33`,
          }}
            onMouseEnter={e => { if (!sending) e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; }}
          >
            {sending ? "Enviando…" : "Enviar pedido por WhatsApp 💬"}
          </button>

          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: T.muted, textAlign: "center", margin: 0 }}>
            Al enviar, se abrirá WhatsApp con tu pedido listo para enviar. 🌿
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}`;
  return (
    <footer style={{
      background: T.text, color: T.cream,
      padding: "60px 5% 40px",
      textAlign: "center",
    }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>🌿</div>
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 24, fontWeight: 700,
        marginBottom: 8,
      }}>Manos que Crean</div>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#8A7060", fontSize: 14, marginBottom: 28 }}>
        Artesanías únicas · Hechas con amor
      </p>
      <a href={waLink} target="_blank" rel="noreferrer" style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        background: "#25D366", color: "#fff",
        padding: "12px 28px", borderRadius: 50,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 700, fontSize: 14,
        textDecoration: "none",
        transition: "transform 0.2s",
      }}
        onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
        onMouseLeave={e => e.target.style.transform = "scale(1)"}
      >
        💬 Escríbenos por WhatsApp
      </a>
      <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A3A2E", fontSize: 12, marginTop: 48 }}>
        © {new Date().getFullYear()} Manos que Crean · Todos los derechos reservados
      </p>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Apply global styles
    document.body.style.margin = "0";
    document.body.style.background = T.bg;
    document.body.style.overflowX = "hidden";

    // Inject global CSS
    const style = document.createElement("style");
    style.textContent = `
      * { box-sizing: border-box; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: ${T.bg2}; }
      ::-webkit-scrollbar-thumb { background: ${T.accent}66; border-radius: 3px; }
      html { scroll-behavior: smooth; }
      @keyframes slideUp {
        from { opacity:0; transform: translate(-50%, 20px); }
        to   { opacity:1; transform: translate(-50%, 0); }
      }
      select option { background: ${T.card}; color: ${T.text}; }
    `;
    document.head.appendChild(style);

    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <>
      <Header />
      <Hero show={show} />
      <Productos show={show} />
      <Nosotros show={show} />
      <Pedidos show={show} onToast={setToast} />
      <Footer />
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
    </>
  );
}
