import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api

/**
 * iOS com Emulador: localhost
 * iOS com físico: IP da máquina
 * Android com Emulador: comando :: adb reverse tcp:3333 tcp:3333 :: localhost -> o 3333 é a porta que estamos rodando o NodeJS
 * Android com Emulador: configurar um ip fixo para o emulador -> 10.0.2.2
 * Android com físico: IP da máquina
 */