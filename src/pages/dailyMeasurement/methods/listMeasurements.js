import { ListMeasurementsItem } from './ListMeasurementsItem';




export const ListMeasurements = ({ measurements, set_measurements, set_measurement_selected }) => {



  if (!measurements || measurements.length < 1) return <></>;



  return (

    <>
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th></th>
            <th>code</th>
            <th>data</th>
            <th>máxima</th>
            <th>mínima</th>
            <th>batimentos</th>
            <th>peso</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {measurements && measurements.map((item, key) => {
            return (

              <ListMeasurementsItem key={key} item={item} measurements={measurements} set_measurements={set_measurements} set_measurement_selected={set_measurement_selected} />

            );
          })}
        </tbody>
      </table>
    </>
  );
};
