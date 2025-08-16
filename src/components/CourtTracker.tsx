import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, ArrowLeft, Search, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface CourtTrackerProps {
  onBack: () => void;
}

interface CaseInfo {
  caseNumber: string;
  caseType: string;
  court: string;
  nextHearing: string;
  status: string;
  judge: string;
  location: string;
  time: string;
}

const CourtTracker: React.FC<CourtTrackerProps> = ({ onBack }) => {
  const { language } = useLanguage();
  const [caseNumber, setCaseNumber] = useState('');
  const [selectedCourt, setSelectedCourt] = useState('');
  const [caseInfo, setCaseInfo] = useState<CaseInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const courts = [
    'Supreme Court of India',
    'Delhi High Court',
    'Mumbai High Court',
    'District Court Delhi',
    'Family Court Delhi',
    'Sessions Court Mumbai'
  ];

  const getLocalizedText = (key: string) => {
    const texts = {
      title: {
        en: 'Court & Case Tracking',
        hi: 'न्यायालय और मामला ट्रैकिंग',
        te: 'కోర్టు మరియు కేసు ట్రాకింగ్',
        mr: 'न्यायालय आणि केस ट्रॅकिंग',
        kn: 'ನ್ಯಾಯಾಲಯ ಮತ್ತು ಕೇಸ್ ಟ್ರಾಕಿಂಗ್'
      },
      subtitle: {
        en: 'Track your case status and hearing dates',
        hi: 'अपने मामले की स्थिति और सुनवाई की तारीखों को ट्रैक करें',
        te: 'మీ కేసు స్థితి మరియు విచారణ తేదీలను ట్రాక్ చేయండి',
        mr: 'तुमच्या केसची स्थिती आणि सुनावणीच्या तारखा ट्रॅक करा',
        kn: 'ನಿಮ್ಮ ಕೇಸಿನ ಸ್ಥಿತಿ ಮತ್ತು ವಿಚಾರಣೆ ದಿನಾಂಕಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ'
      },
      caseNumber: {
        en: 'Case Number',
        hi: 'मामला संख्या',
        te: 'కేసు నంబర్',
        mr: 'केस नंबर',
        kn: 'ಕೇಸ್ ಸಂಖ್ಯೆ'
      },
      court: {
        en: 'Select Court',
        hi: 'न्यायालय चुनें',
        te: 'కోర్టును ఎంచుకోండి',
        mr: 'न्यायालय निवडा',
        kn: 'ನ್ಯಾಯಾಲಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ'
      },
      search: {
        en: 'Search Case',
        hi: 'मामला खोजें',
        te: 'కేసు వెతకండి',
        mr: 'केस शोधा',
        kn: 'ಕೇಸ್ ಹುಡುಕಿ'
      }
    };
    return texts[key]?.[language] || texts[key]?.en || '';
  };

  const handleSearch = async () => {
    if (!caseNumber || !selectedCourt) {
      setError(language === 'hi' ? 'कृपया सभी फील्ड भरें' : 'Please fill all fields');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      // Mock data - in real app, this would come from court APIs
      const mockCaseInfo: CaseInfo = {
        caseNumber: caseNumber,
        caseType: 'Civil Suit',
        court: selectedCourt,
        nextHearing: '2024-01-15',
        status: 'Active',
        judge: 'Hon\'ble Justice R.K. Sharma',
        location: 'Courtroom 15, 2nd Floor',
        time: '11:00 AM'
      };

      setCaseInfo(mockCaseInfo);
      setIsLoading(false);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-empowerment-green text-white';
      case 'pending': return 'bg-justice-gold text-black';
      case 'disposed': return 'bg-muted text-muted-foreground';
      default: return 'bg-trust-blue text-white';
    }
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
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {getLocalizedText('title')}
          </h1>
          <p className="text-muted-foreground text-lg">
            {getLocalizedText('subtitle')}
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-trust-blue" />
              {language === 'hi' ? 'मामला खोजें' : 'Search Your Case'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="caseNumber">{getLocalizedText('caseNumber')}</Label>
                <Input
                  id="caseNumber"
                  placeholder="CRL.A. 123/2024"
                  value={caseNumber}
                  onChange={(e) => setCaseNumber(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label>{getLocalizedText('court')}</Label>
                <Select value={selectedCourt} onValueChange={setSelectedCourt}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Choose court..." />
                  </SelectTrigger>
                  <SelectContent>
                    {courts.map((court) => (
                      <SelectItem key={court} value={court}>
                        {court}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}

            <Button 
              onClick={handleSearch}
              disabled={isLoading || !caseNumber || !selectedCourt}
              className="w-full bg-trust-blue hover:bg-trust-blue/90"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {language === 'hi' ? 'खोज रहे हैं...' : 'Searching...'}
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  {getLocalizedText('search')}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Case Information */}
        {caseInfo && (
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Case Details</CardTitle>
                  <Badge className={getStatusColor(caseInfo.status)}>
                    {caseInfo.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">
                      {language === 'hi' ? 'मामला संख्या' : 'Case Number'}
                    </Label>
                    <p className="font-mono text-lg">{caseInfo.caseNumber}</p>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">
                      {language === 'hi' ? 'मामला प्रकार' : 'Case Type'}
                    </Label>
                    <p className="text-lg">{caseInfo.caseType}</p>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">
                      {language === 'hi' ? 'न्यायालय' : 'Court'}
                    </Label>
                    <p className="text-lg">{caseInfo.court}</p>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">
                      {language === 'hi' ? 'न्यायाधीश' : 'Judge'}
                    </Label>
                    <p className="text-lg">{caseInfo.judge}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Hearing */}
            <Card className="shadow-lg border-0 bg-gradient-to-r from-trust-blue/10 to-soft-purple/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-trust-blue">
                  <Calendar className="h-5 w-5" />
                  {language === 'hi' ? 'अगली सुनवाई' : 'Next Hearing'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-trust-blue" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'hi' ? 'तारीख' : 'Date'}
                      </p>
                      <p className="font-semibold">{caseInfo.nextHearing}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-empowerment-green" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'hi' ? 'समय' : 'Time'}
                      </p>
                      <p className="font-semibold">{caseInfo.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-justice-gold" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {language === 'hi' ? 'स्थान' : 'Location'}
                      </p>
                      <p className="font-semibold">{caseInfo.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <Button 
                    variant="outline"
                    onClick={() => {
                      const message = `Case Update: ${caseInfo.caseNumber}\nNext Hearing: ${caseInfo.nextHearing} at ${caseInfo.time}\nLocation: ${caseInfo.location}`;
                      window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="w-full"
                  >
                    {language === 'hi' ? 'WhatsApp पर शेयर करें' : 'Share on WhatsApp'}
                  </Button>
                  
                  <Button 
                    onClick={() => {
                      const reminder = `Reminder: Court hearing for case ${caseInfo.caseNumber} on ${caseInfo.nextHearing} at ${caseInfo.time}, ${caseInfo.location}`;
                      navigator.clipboard.writeText(reminder);
                    }}
                    className="w-full bg-empowerment-green hover:bg-empowerment-green/90"
                  >
                    {language === 'hi' ? 'रिमाइंडर कॉपी करें' : 'Copy Reminder'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourtTracker;