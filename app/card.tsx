import React from 'react';
import { motion } from 'framer-motion';
import { Button, Card, CardBody, CardFooter, CardHeader, Link } from '@nextui-org/react';

interface CardProps {
  name: string;
  desc: string;
  link: string;
  linkdesc: string;
  stack: string;
  index: number;
}

const ProjectCard: React.FC<CardProps> = ({ name, desc, link, linkdesc, stack, index }) => {
  const bodyColor = index % 2 === 0 ? 'bg-primary-50 text-blue-950' : 'bg-secondary-50 text-purple-950';
  const headerColor = index %2 === 0 ? 'bg-primary-200': 'bg-secondary-200';
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 150,
      }}
      whileInView={{
        opacity: 1,
        y: 10,
        transition: {
          duration: 1,
        },
      }}
      viewport={{ once: true }}
    >
      <Card isBlurred className={`${bodyColor}  w-[25rem] h-[17rem] max-h-fit p-1 m-3`}>
        <CardHeader className={`${headerColor} text-lg`}>
          {name}
        </CardHeader>
        <CardBody className='flex'>
          <p className='text-md'>{desc}</p>
        </CardBody>
        <CardFooter className='flex justify-between text-sm'>
          <p className='text-left'>{stack}</p>
          <Button className='p-2' size='sm' color={index%2 === 0? 'primary':'secondary'} variant='flat'>
            <Link className='text-xs' color={index%2 === 0? 'primary':'secondary'} href={link}>{linkdesc}</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
