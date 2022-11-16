import LineGradient from '../components/LineGradient';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import contact from '../assets/contact.jpg';


const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors }
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id="contact" className="py-48">
      <motion.div
        className='flex justify-end w-full'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        <div>
          <p className="font-normal text-4xl">
            Let's <span className="text-red">work</span> together!
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-full" />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className='basis-1/2 flex justify-center'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <img src={contact} alt="contact" />
        </motion.div>

        <motion.div
          className='basis-1/2 mt-10 md:mt-0'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/ce202887be9205cb758ea04ac3851853"
            method="POST"
          >
            <input
              className='w-full bg-blue2 placeholder-opaque-black p-3'
              type="text"
              placeholder='NAME'
              {...register("name", {
                required: true,
                maxLength: 75,
              })}
            />
            {errors.name && (
              <p className='text-lightRed mt-1'>
                {errors.name.type === "required" && "Ahhh c'mon, don't be shy!"}
                {errors.name.type === "maxLength" && "That's quite a name you got there. I can only handle 75 characters."}
              </p>
            )}
            <input 
              className='w-full bg-blue2 placeholder-opaque-black p-3 mt-5'
              type="text"
              placeholder='EMAIL'
              {...register("email", {
                required: true,
                pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className='text-lightRed mt-1'>
                {errors.email.type === "required" && "Ahhh c'mon, don't be shy!"}
                {errors.email.type === "pattern" && "That's not a real email! give me something good."}
              </p>
            )}
            <textarea 
            rows="4"
            cols="50"
              className='w-full bg-blue2 placeholder-opaque-black p-3 mt-5'
              type="text"
              placeholder='MESSAGE'
              {...register("message", {
                required: true,
                maxLength: 2000, 
              })}
            />
            {errors.message && (
              <p className='text-lightRed mt-1'>
                {errors.message.type === "required" && "Ahhh c'mon, don't be shy!"}
                {errors.message.type === "maxLength" && "Woah! I've allowed 2000 characters and you still have more to say?!"}
              </p>
            )}
              <button
                type="submit"
                className="p-5 bg-green text-darkest font-bold mt-5 hover:bg-lightGreen hover:text-white transition duration-300"
              >
                Fire Away!
              </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact;