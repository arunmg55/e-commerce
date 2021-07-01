const IconsList = ({ options = [], listClassName = undefined }) => (
  <ul className={`${listClassName} list`}>
    {styles}
    {options?.map(({ link = '#', icon = '', name = '' }) => (
      <li>
        <a href={link}>{icon && <img src={icon} alt={name} title={name} />}</a>
      </li>
    ))}
  </ul>
)

export default IconsList
const styles = (
  <style jsx>
    {`
      .list {
        list-style: none;
      }
      .list li {
        margin-right: 10px;
      }
    `}
  </style>
)
