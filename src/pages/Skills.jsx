/**
 * skills page component displaying a list of skills.
 * @param {Object} props
 * @param {Object} props.skills - skills content from skills.json
 * @param {string} props.skills.list - skill listed items
 * @returns {JSX.Element}
 */
const Skills = ({skills}) => {
  return (
  <div>
    <h2 className="topic">Marketable Skills and Abilities</h2>
    <main className="skillcontent">
      <ul className="content">
        <li>{skills.list1}</li>
        <li>{skills.list2}</li>
        <li>{skills.list3}</li>
      </ul>
    </main>
  </div>
  );
};

export default Skills;