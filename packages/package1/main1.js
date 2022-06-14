import React from 'react'

console.log("React.version", React.version);

console.log('package1/main1js')
export const printf = (string) => {
  console.log(string)
  return string
}

export default printf
