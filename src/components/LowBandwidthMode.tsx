import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Smartphone, MessageSquare, Phone, ArrowLeft, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LowBandwidthModeProps {
  onBack: () => void;
}

const LowBandwidthMode: React.FC<LowBandwidthModeProps> = ({ onBack }) => {
  const { t, language } = useLanguage();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [instructions, setInstructions] = useState('');

  const handleRegister = () => {
    if (phoneNumber.length >= 10) {
      setIsRegistered(true);
      const phoneText = phoneNumber.replace('+91', '').replace(/\s/g, '');
      setInstructions(`Send "LEGAL START" to this WhatsApp number: +91-${phoneText}`);
    }
  };

  const getLocalizedText = (key: string) => {
    const texts = {
      title: {
        en: 'Low-Bandwidth Mode',
        hi: 'कम बैंडविड्थ मोड',
        te: 'తక్కువ బ్యాండ్‌విడ్త్ మోడ్',
        mr: 'कमी बँडविड्थ मोड',
        kn: 'ಕಡಿಮೆ ಬ್ಯಾಂಡ್‌ವಿಡ್ತ್ ಮೋಡ್'
      },
      subtitle: {
        en: 'Legal help via SMS and WhatsApp',
        hi: 'SMS और WhatsApp के माध्यम से कानूनी सहायता',
        te: 'SMS మరియు WhatsApp ద్వారా న్యాయ సహాయం',
        mr: 'SMS आणि WhatsApp द्वारे कायदेशीर मदत',
        kn: 'SMS ಮತ್ತು WhatsApp ಮೂಲಕ ಕಾನೂನು ಸಹಾಯ'
      },
      phone: {
        en: 'Your Phone Number',
        hi: 'आपका फोन नंबर',
        te: 'మీ ఫోన్ నంబర్',
        mr: 'तुमचा फोन नंबर',
        kn: 'ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆ'
      },
      register: {
        en: 'Register for SMS Service',
        hi: 'SMS सेवा के लिए रजिस्टर करें',
        te: 'SMS సేవ కోసం నమోదు చేసుకోండి',
        mr: 'SMS सेवेसाठी नोंदणी करा',
        kn: 'SMS ಸೇವೆಗಾಗಿ ನೋಂದಾಯಿಸಿ'
      }
    };
    return texts[key]?.[language] || texts[key]?.en || '';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 p-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {language === 'hi' ? 'वापस' : language === 'te' ? 'వెనుకకు' : 'Back'}
        </Button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-trust-blue to-soft-purple rounded-full mb-4">
            <Smartphone className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {getLocalizedText('title')}
          </h1>
          <p className="text-muted-foreground text-lg">
            {getLocalizedText('subtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* SMS Registration */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-trust-blue" />
                SMS Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isRegistered ? (
                <>
                  <div>
                    <Label htmlFor="phone">{getLocalizedText('phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button 
                    onClick={handleRegister}
                    disabled={phoneNumber.length < 10}
                    className="w-full bg-trust-blue hover:bg-trust-blue/90"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {getLocalizedText('register')}
                  </Button>
                </>
              ) : (
                <div className="bg-empowerment-green/10 border border-empowerment-green/20 rounded-lg p-4">
                  <p className="text-sm font-medium text-empowerment-green mb-2">
                    ✓ {language === 'hi' ? 'पंजीकृत!' : 'Registered!'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {instructions}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* WhatsApp Integration */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-empowerment-green" />
                WhatsApp Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">
                  {language === 'hi' ? 'कैसे उपयोग करें:' : 'How to use:'}
                </h4>
                <ol className="text-sm space-y-1 text-muted-foreground">
                  <li>1. {language === 'hi' ? 'नीचे दिए गए नंबर को सेव करें' : 'Save the number below'}</li>
                  <li>2. {language === 'hi' ? 'अपना सवाल टाइप करें या वॉइस नोट भेजें' : 'Type question or send voice note'}</li>
                  <li>3. {language === 'hi' ? 'AI से तुरंत जवाब पाएं' : 'Get instant AI response'}</li>
                </ol>
              </div>
              
              <div className="text-center">
                <div className="bg-empowerment-green/10 border border-empowerment-green/20 rounded-lg p-4 mb-4">
                  <p className="font-mono text-lg font-bold text-empowerment-green">
                    +91 98765 43210
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {language === 'hi' ? 'कानूनी सहायता WhatsApp' : 'Legal Help WhatsApp'}
                  </p>
                </div>
                
                <Button 
                  onClick={() => window.open('https://wa.me/919876543210?text=Hello, I need legal help', '_blank')}
                  className="w-full bg-empowerment-green hover:bg-empowerment-green/90"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {language === 'hi' ? 'WhatsApp पर चैट शुरू करें' : 'Start WhatsApp Chat'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <Card className="mt-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">
              {language === 'hi' ? 'सुविधाएं:' : 'Features:'}
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MessageSquare className="h-6 w-6 text-trust-blue" />
                </div>
                <h4 className="font-medium text-sm">
                  {language === 'hi' ? 'टेक्स्ट सपोर्ट' : 'Text Support'}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === 'hi' ? 'SMS/WhatsApp पर सवाल पूछें' : 'Ask via SMS/WhatsApp'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-empowerment-green/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Phone className="h-6 w-6 text-empowerment-green" />
                </div>
                <h4 className="font-medium text-sm">
                  {language === 'hi' ? 'वॉइस नोट्स' : 'Voice Notes'}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === 'hi' ? 'अपनी भाषा में बोलें' : 'Speak in your language'}
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-justice-gold/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Send className="h-6 w-6 text-justice-gold" />
                </div>
                <h4 className="font-medium text-sm">
                  {language === 'hi' ? 'तुरंत जवाब' : 'Instant Reply'}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === 'hi' ? 'AI से तुरंत मदद पाएं' : 'Get instant AI help'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LowBandwidthMode;