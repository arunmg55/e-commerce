import Link from 'next/link'

const List = ({ options = [], title, wrapperClass = '' }) => (
  <>
    {styles}
    {title && <h4>{title}</h4>}
    <ul className={`${wrapperClass} list`}>
      {options?.map(({ label = '', link = '#', id = '' }, listId) => (
        <li key={id || `${listId}-${title}`}>
          <Link href={link}>{label}</Link>
        </li>
      ))}
    </ul>
  </>
)

export default List

const styles = (
  <style jsx>
    {`
      .list {
        list-style: none;
      }
    `}
  </style>
)
