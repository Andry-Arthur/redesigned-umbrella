const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path) {
  if (!path.startsWith("/")) {
    return path;
  }

  if (!basePath) {
    return path;
  }

  if (path.startsWith(`${basePath}/`)) {
    return path;
  }

  return `${basePath}${path}`;
}