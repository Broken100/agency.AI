import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  const servicesData = [
    {
      title: "Desarrollo Web y Software",
      description:
        "Creamos soluciones digitales personalizadas que impulsan tu crecimiento y optimizan tus procesos.",
      icon: assets.ads_icon,
    },
    {
      title: "Diseño y Experiencia de Usuario (UX/UI)",
      description:
        "Diseñamos interfaces modernas y funcionales que cautivan y mejoran la experiencia de tus usuarios.",
      icon: assets.marketing_icon,
    },
    {
      title: "Posicionamiento SEO",
      description:
        "Optimizamos tu presencia online para que tu marca aparezca donde tus clientes te buscan.",
      icon: assets.content_icon,
    },
    {
      title: "Gestión de Redes Sociales",
      description:
        "Fortalecemos tu presencia digital y construimos comunidades activas en torno a tu marca.",
      icon: assets.social_icon,
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title
        title="Nuestros Servicios"
        desc="Desde la estrategia hasta la ejecución, creamos soluciones digitales que impulsan su negocio hacia adelante."
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
