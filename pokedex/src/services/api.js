export default function connection = (connection => {
    connection =  async () => {
    const url = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await url.json()
    console.log(data.results)
    setPoke(data.results)
)
}