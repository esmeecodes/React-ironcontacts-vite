function ContactCard(props) {
  const { contact } = props;

  return (
    <div className="ContactCard">
      <p>{contact.name}</p>
      {/* <table>
        <tr>
          <th>Picture</th>
          <td>{contact.pictureUrl}</td>
        </tr>
        <tr>
          <th>Name</th>
          <td>{contact.name}</td>
        </tr>
        <tr>
          <th>Popularity</th>
          <td>{contact.popularity}</td>
        </tr>
      </table> */}
    </div>
  );
}

export default ContactCard;
