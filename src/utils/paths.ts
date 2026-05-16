const baseUrl = import.meta.env.BASE_URL ?? "/";

export function withBase(path: string) {
  if (!path || path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:") || path.startsWith("#")) {
    return path;
  }

  if (!path.startsWith("/")) {
    return path;
  }

  if (baseUrl === "/") {
    return path;
  }

  return `${baseUrl.replace(/\/$/, "")}${path}`;
}

export function withoutBase(pathname: string) {
  if (baseUrl === "/") {
    return pathname;
  }

  const normalizedBase = baseUrl.replace(/\/$/, "");
  return pathname === normalizedBase ? "/" : pathname.replace(normalizedBase, "") || "/";
}
