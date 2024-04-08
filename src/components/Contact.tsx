import Subsidiaries from './Subsidiaries';

const Contact = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Contatti</h2>
      <table className="border-separate border">
        <tr>
          <th>Le filiali</th>
          <td>
            <img className="w-48" src="/assets/images/building.jpeg" alt="" />
          </td>
          <td>
            <Subsidiaries />
          </td>
        </tr>
        <tr>
          <th>Numero verde</th>
          <td>
            <img className="w-48" src="/assets/images/telephone.jpg" alt="" />
          </td>
          <td>800 131 431</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>
            <img className="w-48" src="/assets/images/at-symbol.png" alt="" />
          </td>
          <td>info@acme.it</td>
        </tr>
      </table>
    </>
  );
};

export default Contact;
