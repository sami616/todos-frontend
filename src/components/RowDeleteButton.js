import React from 'react'
import { axios } from '../utils'
import { Button } from './Button'
import { toast } from 'react-toastify'

//x//////////////////////////////////////////////////
// RowDeleteButton
//x//////////////////////////////////////////////////

export const RowDeleteButton = ({
  setData,
  row,
  error = 'Couldnt delete row',
  baseUrl,
  secondary,
  small,
}) => {
  const [loading, setLoading] = React.useState(false)

  const deleteRow = () => {
    setLoading(true)
    axios
      .delete(`${baseUrl}/${row.id}`)
      .then(() => {
        setData(existingRows =>
          existingRows.filter(existingRow => existingRow.id !== row.id)
        )
      })
      .catch(() => {
        setLoading(false)
        toast(error)
      })
  }

  return (
    <Button
      secondary={secondary}
      small={small}
      loading={loading}
      onClick={deleteRow}>
      {loading ? 'Deleting' : 'Delete'}
    </Button>
  )
}
