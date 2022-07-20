
const Stats = ({stat}) => {
  return (
    <tr>
        <td>
            {stat.stat.name}
        </td>
        <td>
            {stat.base_stat}
        </td>
    </tr>
  )
}

export default Stats