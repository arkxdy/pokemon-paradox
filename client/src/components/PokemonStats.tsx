import { Stat } from "@app/type";
import { BarChart } from "@mui/x-charts";

const PokemonStats = (props:{stats: Stat[]}) => {
    const columns = props.stats.map((item) => (item.stat.name.toUpperCase()))
    const rows = props.stats.map((item) => (item.base_stat))
    
    return (
        <>
        <BarChart
            xAxis={[
                {
                  id: 'barCategories',
                  data: columns,
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                    color: '#59a14f',
                    data: rows,
                },
              ]}
              height={500}
        />
        </>
    )
}

export default PokemonStats;