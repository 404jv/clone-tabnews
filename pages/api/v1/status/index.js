export default function status(request, response) {
  response.status(200).json({
    message: 'Hello, World! API é muito legal'
  })
}
