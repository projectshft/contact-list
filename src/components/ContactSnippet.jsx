export default function ContactSnippet() {
  const array = ['Ryan', 'John', 'Aaron', 'Bob'];

  const contacts = array.map((arr, idx) => (
    <div className="p-1 m-1 border-b border-gray-300" key={idx}>
      {arr}
    </div>
  ));

  return <div>{contacts}</div>;
}
