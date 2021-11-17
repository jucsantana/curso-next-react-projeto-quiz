function Embaralhar (elementos:any[]): any[]  {
   return elementos
            .map(o => ({value:o, aleatorio: Math.random()}))
            .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio)
            .map(o => o.value)
}


export default Embaralhar