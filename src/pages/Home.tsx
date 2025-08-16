import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, FileText, Users, Mic, Scale, Heart, Camera, Smartphone, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

interface HomeProps {
  onNavigate: (page: 'chat' | 'document' | 'ngo' | 'ocr' | 'bandwidth' | 'court') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: MessageCircle,
      title: t('askQuestion'),
      description: 'Get instant legal guidance in your language',
      action: () => onNavigate('chat'),
      color: 'text-trust-blue',
      bgColor: 'bg-trust-blue/10'
    },
    {
      icon: Mic,
      title: t('voiceInput'),
      description: 'Speak your legal questions naturally',
      action: () => onNavigate('chat'),
      color: 'text-justice-gold',
      bgColor: 'bg-justice-gold/10'
    },
    {
      icon: Camera,
      title: 'Scan Document',
      description: 'Upload and explain legal documents with AI',
      action: () => onNavigate('ocr'),
      color: 'text-empowerment-green',
      bgColor: 'bg-empowerment-green/10'
    },
    {
      icon: FileText,
      title: t('documentGen'),
      description: 'Generate FIR, RTI and other legal documents',
      action: () => onNavigate('document'),
      color: 'text-soft-purple',
      bgColor: 'bg-soft-purple/10'
    },
    {
      icon: Users,
      title: t('ngoDirectory'),
      description: 'Find legal aid organizations near you',
      action: () => onNavigate('ngo'),
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Smartphone,
      title: language === 'hi' ? 'कम बैंडविड्थ मोड' : 'Low-Bandwidth Mode',
      description: language === 'hi' ? 'SMS और WhatsApp के माध्यम से कानूनी सहायता' : 'Legal help via SMS and WhatsApp',
      action: () => onNavigate('bandwidth'),
      color: 'text-warm-orange',
      bgColor: 'bg-warm-orange/10'
    },
    {
      icon: Calendar,
      title: language === 'hi' ? 'न्यायालय ट्रैकिंग' : 'Court & Case Tracking',
      description: language === 'hi' ? 'अपने मामले की स्थिति और सुनवाई की तारीखें जानें' : 'Track case status and hearing dates',
      action: () => onNavigate('court'),
      color: 'text-empowerment-green',
      bgColor: 'bg-empowerment-green/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <header className="border-b border-border/60 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-trust-blue to-soft-purple rounded-lg flex items-center justify-center">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Lovable AI</h1>
              <p className="text-xs text-muted-foreground">Legal Assistant</p>
            </div>
          </div>
          <LanguageSelector />
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-trust-blue to-soft-purple rounded-full mb-6">
            <Scale className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {language === 'hi' ? 'आपकी आवाज़ है आपका अधिकार' : 
             language === 'te' ? 'మీ వాయిస్ మీ హక్కు' :
             language === 'mr' ? 'तुमचा आवाज तुमचा हक्क' :
             language === 'kn' ? 'ನಿಮ್ಮ ಧ್ವನಿಯೇ ನಿಮ್ಮ ಹಕ್ಕು' :
             'Your Voice, Your Right'}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === 'hi' ? 'AI के साथ कानूनी समस्याओं का समाधान, दस्तावेज़ निर्माण और विशेषज्ञ सहायता' :
             language === 'te' ? 'AI తో చట్టపరమైన సమస్యల పరిష్కారం, పత్రాల తయారీ మరియు నిపుణుల సహాయం' :
             language === 'mr' ? 'AI सह कायदेशीर समस्यांचे निराकरण, दस्तऐवज निर्मिती आणि तज्ञ मदत' :
             language === 'kn' ? 'AI ಯೊಂದಿಗೆ ಕಾನೂನು ಸಮಸ್ಯೆಗಳ ಪರಿಹಾರ, ದಾಖಲೆ ರಚನೆ ಮತ್ತು ತಜ್ಞರ ಸಹಾಯ' :
             'AI-powered legal solutions, document generation, and expert assistance'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 bg-white/80 backdrop-blur-sm shadow-lg"
              onClick={feature.action}
            >
              <CardHeader className="text-center pb-3">
                <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <CardTitle className="text-base font-semibold leading-tight">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 rounded-lg"
                >
                  {language === 'hi' ? 'शुरू करें' : 
                   language === 'te' ? 'ప్రారంభించండి' :
                   language === 'mr' ? 'सुरु करा' :
                   language === 'kn' ? 'ಪ್ರಾರಂಭಿಸಿ' : 
                   'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <Card className="max-w-4xl mx-auto border-0 bg-white/80 backdrop-blur-sm shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {language === 'hi' ? 'सभी के लिए न्याय' :
                 language === 'te' ? 'అందరికీ న్యాయం' :
                 language === 'mr' ? 'सर्वांसाठी न्याय' :
                 language === 'kn' ? 'ಎಲ್ಲರಿಗೂ ನ್ಯಾಯ' :
                 'Justice for Everyone'}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                {language === 'hi' ? 'Lovable AI आपकी भाषा में कानूनी सहायता प्रदान करता है। FIR दर्ज करने से लेकर RTI आवेदन तक, हम आपकी हर कानूनी जरूरत में मदद करते हैं।' :
                 language === 'te' ? 'Lovable AI మీ భాషలో న్యాయ సహాయం అందిస్తుంది. FIR నమోదు చేయడం నుండి RTI దరఖాస్తు వరకు, మేము మీ ప్రతి చట్టపరమైన అవసరంలో సహాయం చేస్తాము.' :
                 language === 'mr' ? 'Lovable AI तुमच्या भाषेत कायदेशीर मदत पुरवते. FIR नोंदणीपासून RTI अर्जापर्यंत, आम्ही तुमच्या प्रत्येक कायदेशीर गरजेत मदत करतो.' :
                 language === 'kn' ? 'Lovable AI ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಕಾನೂನು ಸಹಾಯವನ್ನು ಒದಗಿಸುತ್ತದೆ. FIR ನೋಂದಣೆಯಿಂದ RTI ಅರ್ಜಿಯವರೆಗೆ, ನಿಮ್ಮ ಪ್ರತಿಯೊಂದು ಕಾನೂನು ಅಗತ್ಯದಲ್ಲಿ ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.' :
                 'Lovable AI provides legal assistance in your language. From filing FIR to RTI applications, we help with all your legal needs.'}
              </p>
            </div>
            
            {/* Key Features */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-6 w-6 text-trust-blue" />
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'hi' ? 'निःशुल्क सेवा' : 'Free Service'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi' ? 'सभी के लिए मुफ्त कानूनी सहायता' : 'Free legal assistance for everyone'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-empowerment-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="h-6 w-6 text-empowerment-green" />
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'hi' ? 'तुरंत जवाब' : 'Instant Responses'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi' ? '24/7 AI सहायता उपलब्ध' : '24/7 AI assistance available'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-justice-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Scale className="h-6 w-6 text-justice-gold" />
                </div>
                <h3 className="font-semibold mb-2">
                  {language === 'hi' ? 'भरोसेमंद' : 'Trustworthy'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'hi' ? 'सटीक और विश्वसनीय जानकारी' : 'Accurate and reliable information'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-16 py-8 border-t border-border/60">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              {language === 'hi' ? '© 2024 Lovable AI. सभी अधिकार सुरक्षित।' :
               language === 'te' ? '© 2024 Lovable AI. అన్ని హక్కులు రక్షించబడ్డాయి.' :
               language === 'mr' ? '© 2024 Lovable AI. सर्व हक्क राखीव.' :
               language === 'kn' ? '© 2024 Lovable AI. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.' :
               '© 2024 Lovable AI. All rights reserved.'}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;