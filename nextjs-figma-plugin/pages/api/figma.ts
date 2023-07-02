import { NextApiRequest, NextApiResponse } from 'next';
import { getStyles, createVariables } from '../../utils/figmaAPI';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const styles = await getStyles();
        const variables = createVariables(styles);
        res.status(200).json({ variables });
      } catch (error) {
        res.status(500).json({ error: 'Error fetching styles from Figma' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}