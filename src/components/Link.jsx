export default function Link({ url, label, children, newTab = false }) {
  return (
    <a
      href={url}
      aria-label={label}
      className="btn-primary"
      style={{ textDecoration: "none" }}
      target={newTab ? "_blank" : ""}
    >
      {children}
    </a>
  );
}
