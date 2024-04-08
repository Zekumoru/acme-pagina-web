interface ISubsidiary {
  name: string;
  address: string;
  postal: string;
  number: string;
}

const subsidiaries: ISubsidiary[] = [
  {
    name: 'Filiale di Lucca',
    address: 'Via Mazzini, 10',
    postal: '55100 - Lucca',
    number: '0583 5557142',
  },
  {
    name: 'Filiale di Pisa',
    address: 'Via Rossi, 105',
    postal: '56127 - Pisa',
    number: '050 5551234',
  },
  {
    name: 'Filiale di Grosseto',
    address: 'Piazza Garibaldi, 4',
    postal: '58100 - Grosetto',
    number: '0564 5554321',
  },
];

const Subsidiaries = () => {
  return (
    <ol className="list-decimal list-inside">
      {subsidiaries.map(({ name, address, postal, number }) => (
        <li>
          <span>{name}</span>
          <ul className="list-disc list-inside pl-8">
            <li>{address}</li>
            <li>{postal}</li>
            <li>{number}</li>
          </ul>
        </li>
      ))}
    </ol>
  );
};

export default Subsidiaries;
