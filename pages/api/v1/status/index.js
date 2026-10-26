function status(request, response) {
  response.status(200).json({ chave: "Heverton é lindo" });
}

export default status;
