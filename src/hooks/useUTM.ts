import { useMemo } from 'react';

export function useUTM() {
  const utmParams = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    
    const utmSource = params.get('utm_source') || '';
    const utmMedium = params.get('utm_medium') || '';
    const utmCampaign = params.get('utm_campaign') || '';
    const utmTerm = params.get('utm_term') || '';
    const utmContent = params.get('utm_content') || '';

    const queryString = params.toString();
    const sck = `sck=${utmSource}|${utmMedium}|${utmCampaign}|${utmTerm}|${utmContent}`;

    if (!queryString) return '';
    
    const result = `&${queryString}&${sck}`;
    console.log('[UTM] Params gerados:', result);
    
    return result;
  }, []);

  return utmParams;
}
