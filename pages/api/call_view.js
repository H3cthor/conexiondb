import prisma from "../../prisma/client";

export default async function handler(req, res){
    if (req.method === 'GET') {
        try {
          // Lógica para llamar a la vista
          const result = await prisma.vista_product.findMany(
            //     {
            //     where: {
            //         model_year: '2020',
            //       },
            //       orderBy: {
            //         product_name: 'asc',
            //       },
            // }
          );
    
          res.status(200).json({ result });
        } catch (error) {
          res.status(500).json({ error: 'Error al llamar a la vista' });
        }
      } else {
        res.status(405).json({ error: 'Método no permitido' });
      }
}