"use client"

import { Button } from "@/components/ui/button"

interface BotaoProps {
  texto: string
}

export function Botao({ texto }: BotaoProps) {
  return (
    <Button className="mb-4 text-md bg-[#0b2245] hover:bg-[#153a6c] hover:font-semibold">
      {texto}
    </Button>
  )
}