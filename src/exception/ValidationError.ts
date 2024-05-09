export class ValidationError extends Error {
  campos: any[];
  constructor(campos:any[], message:string = "",) {
    super(message)
    this.name = 'VALIDATION_ERROR'
    this.message = message
    this.campos = campos
  }
}

module.exports = 
{
  ValidationError
}