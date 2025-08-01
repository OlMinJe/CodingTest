function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let cameraCount = 0;
  let lastCameraPosition = -30001;

  for (let [entry, exit] of routes) {
    if (entry > lastCameraPosition) {
      lastCameraPosition = exit;
      cameraCount++;
    }
  }

  return cameraCount;
}
