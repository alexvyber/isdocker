import fs from "node:fs";

export function isDocker() {
  try {
    fs.statSync("/.dockerenv");
    return true;
  } catch {
    try {
      return fs.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
    } catch {
      return false;
    }
  }
}
