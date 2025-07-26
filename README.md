# ⚖ Legislate AI – Legal Help for the Underrepresented

---

## 🧠 Problem Statement

India’s legal system is one of the most complex and inaccessible systems for rural and underprivileged communities. Millions of people in villages, tribal regions, and low-income urban settlements often face legal issues such as:

- Land disputes
- Domestic violence or harassment
- Labour exploitation
- Pension or government benefit issues
- Lack of awareness about FIR, RTI, or consumer rights

However, these communities face critical barriers:

- *Lack of legal literacy:* Unawareness of rights or legal processes.
- *Language barriers:* Legal help is mostly available in English or Hindi, not in local dialects.
- *Fear of police/legal system:* Hesitation to approach formal systems.
- *Cost of legal services:* Lawyers are unaffordable for many.
- *Digital divide:* Apps/services are not built with rural realities in mind (voice-first, low bandwidth, simple UX).

---

## 💡 Proposed Solution: Legislate AI

A multilingual, AI-powered mobile and voice-based platform that enables marginalized individuals to:

### 🗣 1. Ask Legal Questions in Their Language

- Speak or type in Telugu, Hindi, Marathi, etc.
- Get simple, conversational legal advice based on Indian laws.

### 📄 2. Auto-Draft Legal Documents

- Automatically draft FIRs, RTIs, legal complaints, and grievance letters by answering simple questions.
- Export as PDF or forward via WhatsApp/SMS.

### 🧭 3. Guide to Next Steps

- Suggest where to file a complaint, what department to contact, required documents, estimated timelines, and past case examples.

### 🤝 4. Connect to Legal Aid

- Integrate with pro bono legal services, local NGOs, and state legal aid portals (e.g., NALSA).
- Offer appointment booking or WhatsApp connection to a legal aid volunteer.

---

## 🛠 Tech Stack

- *Frontend:* React (TypeScript)
- *Build Tool:* Vite
- *Styling:* Tailwind CSS, tailwindcss-animate, @tailwindcss/typography
- *Component Libraries:* Radix UI, shadcn/ui, Lucide React, Embla Carousel, Recharts
- *Form Handling:* React Hook Form, Zod, @hookform/resolvers
- *State/Data Management:* @tanstack/react-query
- *Routing:* React Router DOM
- *Utilities:* clsx, class-variance-authority, date-fns, axios, vaul, sonner, input-otp, tailwind-merge, lovable-tagger
- *Linting:* ESLint (with React and TypeScript plugins)
- *Type Checking:* TypeScript
- *PostCSS:* autoprefixer, postcss
- *Other:* Node.js, .gitignore

### Main Dependencies

- react, react-dom
- vite
- @vitejs/plugin-react-swc
- @radix-ui/* (various UI components)
- @tanstack/react-query
- react-router-dom
- tailwindcss, tailwindcss-animate, @tailwindcss/typography
- clsx, class-variance-authority
- zod, @hookform/resolvers, react-hook-form
- axios, date-fns, recharts, lucide-react, embla-carousel-react, vaul, sonner, input-otp, tailwind-merge
- eslint, typescript, lovable-tagger

---

## 🚀 Getting Started

1. *Install dependencies:*
   sh
   npm install
   
2. *Start the development server:*
   sh
   npm run dev
   
3. *Build for production:*
   sh
   npm run build
   

---

## 📄 License

MIT License (or specify your license here)
