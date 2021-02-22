import {spawnSync} from 'child_process'

export function getParse(_language, defaultParse) {
  return (text, parsers, options) => {
    let p = spawnSync('rustywind', [ '--stdin' ], {input : text})

    let err_text = p.stderr.toString().trim()
    if (err_text !== "") {
      throw new Error(err_text)
    }

    let sorted_text = p.stdout.toString()
    return defaultParse(sorted_text, parsers, options)
  }
}

export default {getParse}
