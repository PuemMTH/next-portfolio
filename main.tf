resource "docker_image" "nextjs_image" {
  name         = "nextjs-docker-app"
  build {
    path = "." # Path to the directory containing the Dockerfile
  }
}

resource "docker_container" "nextjs_container" {
  image = docker_image.nextjs_image.latest
  name  = "nextjs-docker-container"
  ports {
    internal = 3000
    external = 3000
  }
}
