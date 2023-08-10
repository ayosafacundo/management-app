export interface IEmailGen {
  (a: string, b: string): string
}

export interface ITokenGen {
  (id: number): string
}