//Khi spred ...args thì nó sẽ convert thành array
export default function classNames(...args) {
  return args
    .reduce((acc, val) => {
      if (typeof val === 'string') {
        return acc.concat(val.split(' '))
      }
      return acc.concat(Object.values(val))
    }, [])
    .join(' ')
}

/**
 function demo(...args) {
  console.log(args);
 }
 demo(1,2,3,4) => [1,2,3,4]
 demo("dark","light") => ["dark","light"] => join(" ") -> "dark light"
 */
