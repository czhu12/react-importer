export const isUndefinedOrNull = (a) => {
  return a === null || a === undefined
}

export const isPresent = (a) => !isUndefinedOrNull(a)

export const formatData = (headerMappings, data) => {
  const output = []
  for (let rowIndex = 1; rowIndex < data.length; rowIndex++) {
    const item = {}
    const row = data[rowIndex]
    Object.keys(headerMappings).forEach((k) => {
      const headerMapping = headerMappings[k]
      const columnIndex = headerMapping.columnIndex
      if (headerMapping.selectedField) {
        item[headerMapping.selectedField.value] = row[columnIndex]
      }
    })
    item.rowIndex = rowIndex - 1
    output.push(item)
  }
  return output
}

export const buildSuggestedHeaderMappings = (fields, headers) => {
  const headerMappings = {}
  headers.forEach((header, columnIndex) => {
    const foundField = fields.find((f) => {
      const normalizedKey = f.key
        .toLowerCase()
        .replace('_', '')
        .replace(' ', '')
      const normalizedHeader = header
        .toLowerCase()
        .replace('_', '')
        .replace(' ', '')
      return normalizedKey === normalizedHeader
    })

    if (!foundField) {
      return
    }

    headerMappings[columnIndex] = {
      columnIndex,
      name: header,
      selectedField: {
        value: foundField.key,
        label: foundField.label
      }
    }
  })
  /*
    create header mappings
    (columnIndex => {columnIndex, name: inputHeader, selectedField: {value: '', label: ''}})
  */
  return headerMappings
}

export const filterEmptyRows = (formattedData) => {
  return formattedData.filter(
    (d) => Object.keys(d).filter((k) => k !== 'rowIndex').length > 0
  )
}

export const filterInvalidRows = (formattedData, validationResult) => {
  const rowIndexesWithErrors = validationResult.rowIndexesWithErrors()
  formattedData = formattedData.filter(
    (row) => !rowIndexesWithErrors.has(row.rowIndex)
  )
  return filterEmptyRows(formattedData)
}

export const removeTemporaryKeys = (formattedData) => {
  formattedData.forEach((f) => {
    delete f.rowIndex
  })
  return formattedData
}

export const fieldIsRequired = (field) => {
  if (field.validators && field.validators.length > 0) {
    const isRequired = field.validators.find((v) => v.validate === 'required')
    return !!isRequired
  }
  return false
}

export const buildFinalData = (formattedData, validationResult) => {
  return removeTemporaryKeys(
    filterInvalidRows(filterEmptyRows(formattedData), validationResult)
  )
}

export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
