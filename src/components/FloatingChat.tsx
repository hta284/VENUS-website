import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Chào! Có gì tôi có th? giúp b?n?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }]);
      setInput("");
      setTimeout(() => {
        setMessages(prev => [...prev, { type: "bot", text: "C?m on b?n! Chúng tôi s? tr? l?i s?m nh?t." }]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white shadow-lg hover:shadow-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-2 z-40 flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-32px)] glass rounded-2xl border border-brand-border shadow-lg animate-fade-in-up z-40">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-4 rounded-t-2xl">
            <h3 className="font-semibold">CocoVenus Support</h3>
            <p className="text-sm text-white/80">Chúng tôi thu?ng tr? l?i trong vài phút</p>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === "user"
                      ? "bg-brand-primary text-white"
                      : "bg-brand-border text-brand-text"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-brand-border p-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Nh?p tin nh?n..."
              className="flex-1 px-4 py-2 rounded-lg border border-brand-border bg-white text-brand-text placeholder-brand-text-muted focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded-lg bg-brand-primary text-white hover:bg-brand-primary-dark transition-colors"
            >
              ?
            </button>
          </div>
        </div>
      )}
    </>
  );
}


