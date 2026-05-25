import { ShoppingBag, Box } from 'lucide-react';
import { motion } from 'motion/react';

export default function Channels() {
  const channels = [
    { name: 'Shopee', color: 'hover:border-[#EE4D2D] hover:text-[#EE4D2D]', icon: <ShoppingCartIcon className="w-8 h-8 mb-3" /> },
    { name: 'Lazada', color: 'hover:border-[#0F136D] hover:text-[#0F136D]', icon: <HeartIcon className="w-8 h-8 mb-3" /> },
    { name: 'TikTok Shop', color: 'hover:border-black hover:text-black', icon: <VideoIcon className="w-8 h-8 mb-3" /> },
    { name: 'Siêu Thị', color: 'hover:border-brand-green hover:text-brand-green', icon: <StoreIcon className="w-8 h-8 mb-3" /> },
  ];

  return (
    <section className="py-16 bg-white border-b border-brand-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-serif text-2xl font-bold mb-8">Sản Phẩm Đã Có Mặt Tại</h3>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {channels.map((channel, i) => (
            <motion.a 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              href="#" 
              key={i} 
              className={`w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center bg-brand-cream/50 border-2 border-transparent rounded-2xl transition-all duration-300 ${channel.color} group`}
            >
              <div className="text-brand-brown/50 group-hover:scale-110 transition-transform duration-300 currentColor-inherit">
                 {channel.icon}
              </div>
              <span className="font-bold opacity-70 group-hover:opacity-100">{channel.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Dummy icons simulating logos
function ShoppingCartIcon(props: any) {
  return <ShoppingBag {...props} />
}
function HeartIcon(props: any) {
  return <Box {...props} />
}
function VideoIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
}
function StoreIcon(props: any) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.52V9"/><path d="M11 9v.65a2.73 2.73 0 0 1-1.56 2.06v0a2 2 0 0 1-2-2V7"/></svg>
}
