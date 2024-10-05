function status(request, response) {
  response.status(200).json({ chave: "valor será que é UTF8" });
}

export default status;
