
const AIRCRAFT=[{"tail": "251KD", "type": "CJ2", "max": 3960.0, "refuel": "overwing"}, {"tail": "302CJ", "type": "CJ2+", "max": 4000.0, "refuel": "overwing"}, {"tail": "586FD", "type": "CJ2+", "max": 4000.0, "refuel": "overwing"}, {"tail": "275LX", "type": "CJ3", "max": 4710.0, "refuel": "overwing"}, {"tail": "502EG", "type": "XLS", "max": 6740.0, "refuel": "single"}, {"tail": "560PG", "type": "XLS", "max": 6740.0, "refuel": "single"}, {"tail": "62KW", "type": "XLS+ GWI", "max": 6740.0, "refuel": "single"}, {"tail": "123JK", "type": "Challenger 300", "max": 14150.0, "refuel": "single"}];
const BANDS=[{"label": "55\u00b0 to 50\u00b0C/131\u00b0 to 122\u00b0F", "density": 6.4}, {"label": "49\u00b0 to 36\u00b0C/121\u00b0 to 96\u00b0F", "density": 6.5}, {"label": "35\u00b0 to 22\u00b0C/95\u00b0 to 71\u00b0F", "density": 6.6}, {"label": "21\u00b0 to 10\u00b0C/70\u00b0 to 50\u00b0F", "density": 6.7}, {"label": "9\u00b0 to -1\u00b0C/49\u00b0 to 29\u00b0F", "density": 6.8}, {"label": "-2\u00b0 to -12\u00b0C/28\u00b0 to 10\u00b0F", "density": 6.9}, {"label": "-13\u00b0 to -28\u00b0C/9\u00b0 to -19\u00b0F", "density": 7.0}, {"label": "-29\u00b0 to -40\u00b0C/-20\u00b0 to -40\u00b0F", "density": 7.1}];
const PRECISE=[[-40, 7.1], [-39, 7.095500000000003], [-38, 7.091000000000003], [-37, 7.086500000000003], [-36, 7.0820000000000025], [-35, 7.077500000000002], [-34, 7.073000000000002], [-33, 7.068500000000002], [-32, 7.064000000000002], [-31, 7.059500000000002], [-30, 7.0550000000000015], [-29, 7.050500000000001], [-28, 7.046000000000001], [-27, 7.041500000000001], [-26, 7.037000000000001], [-25, 7.032500000000001], [-24, 7.0280000000000005], [-23, 7.0235], [-22, 7.019], [-21, 7.0145], [-20, 7.01], [-19, 7.001499999999995], [-18, 6.992999999999995], [-17, 6.984499999999995], [-16, 6.9759999999999955], [-15, 6.967499999999996], [-14, 6.958999999999996], [-13, 6.950499999999996], [-12, 6.941999999999997], [-11, 6.933499999999997], [-10, 6.924999999999997], [-9, 6.916499999999997], [-8, 6.907999999999998], [-7, 6.899499999999998], [-6, 6.890999999999998], [-5, 6.8824999999999985], [-4, 6.873999999999999], [-3, 6.865499999999999], [-2, 6.856999999999999], [-1, 6.8485], [0, 6.84], [1, 6.830666666666665], [2, 6.821333333333332], [3, 6.8119999999999985], [4, 6.802666666666665], [5, 6.793333333333332], [6, 6.783999999999999], [7, 6.774666666666666], [8, 6.7653333333333325], [9, 6.755999999999999], [10, 6.746666666666666], [11, 6.737333333333333], [12, 6.728], [13, 6.718666666666667], [14, 6.709333333333333], [15, 6.7], [16, 6.692666666666668], [17, 6.685333333333334], [18, 6.678000000000001], [19, 6.670666666666667], [20, 6.663333333333334], [21, 6.656000000000001], [22, 6.648666666666667], [23, 6.641333333333334], [24, 6.634], [25, 6.626666666666667], [26, 6.6193333333333335], [27, 6.612], [28, 6.604666666666667], [29, 6.597333333333333], [30, 6.59], [31, 6.582], [32, 6.574], [33, 6.566], [34, 6.558], [35, 6.55], [36, 6.542], [37, 6.534], [38, 6.526], [39, 6.518], [40, 6.51], [41, 6.503333333333336], [42, 6.496666666666669], [43, 6.490000000000002], [44, 6.483333333333335], [45, 6.476666666666668], [46, 6.4700000000000015], [47, 6.463333333333335], [48, 6.456666666666668], [49, 6.450000000000001], [50, 6.443333333333334], [51, 6.436666666666667], [52, 6.430000000000001], [53, 6.423333333333334], [54, 6.416666666666667], [55, 6.41]];
const METHODS=["AvFuel Card", "World Card", "Epic Card", "EVO (Contract)", "Mercury (Contract)", "AEG (Contract)", "Phillips 66 (Contract)", "Signature (AmEx)", "Contract", "Board (AmEx)"];
const LEGACY_METHODS={"AvFuel (C)":"AvFuel Card","World Fuel (C)":"World Card","Epic (C)":"Epic Card","EVO (R)":"EVO (Contract)","Mercury (R)":"Mercury (Contract)","AEG (R)":"AEG (Contract)","Phillips 66":"Phillips 66 (Contract)","Signature":"Signature (AmEx)","Invoice":"Contract","Board":"Board (AmEx)"};
const $=id=>document.getElementById(id);
const n=x=>Number.isFinite(Number(x))?Number(x):0;
const money=x=>Number(x).toLocaleString('en-US',{style:'currency',currency:'USD'});
const fmt=x=>Number(x).toLocaleString('en-US',{maximumFractionDigits:0});
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
const clone=x=>JSON.parse(JSON.stringify(x));
const PILOTS=[]; // Public PWA evaluation: pilot contacts intentionally excluded.
let aircraftData=clone(AIRCRAFT),methodData=[...METHODS],preciseData=clone(PRECISE),pilotData=clone(PILOTS);let dirty=false;let version=1;let savedName='';
let model;
const ac=()=>aircraftData.find(a=>a.tail===model.tail)||null;
const density=l=>{const method=model?.density_method||'forecast';if(method!=='forecast')return Number(method);return BANDS.find(b=>b.label===l.temperature_band)?.density??null;};
function bandForCelsius(t){if(!Number.isFinite(Number(t)))return '';const v=Number(t);if(v>=50)return BANDS[0].label;if(v>=36)return BANDS[1].label;if(v>=22)return BANDS[2].label;if(v>=10)return BANDS[3].label;if(v>=-1)return BANDS[4].label;if(v>=-12)return BANDS[5].label;if(v>=-28)return BANDS[6].label;return BANDS[7].label;}
function arrivalWeatherStatus(l){if((model.density_method||'forecast')!=='forecast')return 'Reference only — fixed density active';if(l.arrival_forecast_status?.startsWith('Historical date'))return l.arrival_temperature_band?'Historical date — manual temperature band retained':'Historical date — forecast unavailable; select temperature manually';if(l.arrival_forecast_source==='manual'&&l.arrival_temperature_band)return 'Manual temperature band selected';if(l.arrival_forecast_source==='Open-Meteo'&&l.arrival_forecast_temp_c!==''&&l.arrival_forecast_temp_c!=null)return 'Forecast '+l.arrival_forecast_temp_c+'°C / '+Math.round(Number(l.arrival_forecast_temp_c)*9/5+32)+'°F — '+(l.arrival_forecast_status||'Open-Meteo');return l.arrival_temperature_band?(l.arrival_forecast_status||'Temperature band selected'):'Select a temperature band, or retrieve a forecast';}
function weatherStatus(l){const method=model.density_method||'forecast';if(method!=='forecast')return 'Reference only — fixed density '+method+' lb/gal is active';if(l.forecast_status?.startsWith('Historical date'))return l.temperature_band?'Historical date — manual temperature band retained':'Historical date — forecast unavailable; select temperature manually';if(l.forecast_source==='manual'&&l.temperature_band)return 'Manual temperature band selected';if(l.forecast_source==='Open-Meteo'&&l.forecast_temp_c!==''&&l.forecast_temp_c!=null)return 'Forecast '+l.forecast_temp_c+'°C / '+Math.round(Number(l.forecast_temp_c)*9/5+32)+'°F — '+(l.forecast_status||'Open-Meteo');return l.temperature_band?(l.forecast_status||'Temperature band selected'):'Select a temperature band, or retrieve a forecast';}
const airportAliases={GKY:[32.6639,-97.0943],KGKY:[32.6639,-97.0943],FCM:[44.8272,-93.4571],KFCM:[44.8272,-93.4571],GCK:[37.9275,-100.7244],KGCK:[37.9275,-100.7244],SDL:[33.6229,-111.9105],KSDL:[33.6229,-111.9105],SGF:[37.2457,-93.3886],KSGF:[37.2457,-93.3886],MKC:[39.1232,-94.5928],KMKC:[39.1232,-94.5928],LCK:[39.8138,-82.9278],KLCK:[39.8138,-82.9278],RKD:[44.0601,-69.0992],KRKD:[44.0601,-69.0992],DFW:[32.8998,-97.0403],KDFW:[32.8998,-97.0403],YYZ:[43.6777,-79.6248],CYYZ:[43.6777,-79.6248],CUN:[21.0365,-86.8771],MMUN:[21.0365,-86.8771]};
// NE-002: resolve airports beyond the original small demonstration list.
// The public airport directory is used only for coordinates; forecast data still
// comes from Open-Meteo. The original aliases remain available if lookup fails.
let airportDirectoryPromise=null;
async function airportDirectory(){
 if(!airportDirectoryPromise){
  airportDirectoryPromise=fetch('https://raw.githubusercontent.com/mwgg/Airports/master/airports.json', {cache:'force-cache'})
   .then(r=>{if(!r.ok)throw Error('Airport directory HTTP '+r.status);return r.json();})
   .catch(err=>{airportDirectoryPromise=null;throw err;});
 }
 return airportDirectoryPromise;
}
async function airportCoordinates(code){
 const id=String(code||'').trim().toUpperCase();
 if(airportAliases[id])return airportAliases[id];
 if(!/^[A-Z0-9]{3,4}$/.test(id))return null;
 const directory=await airportDirectory();
 const matches=[];
 if(directory[id])matches.push(directory[id]);
 if(id.length===3&&directory['K'+id])matches.push(directory['K'+id]);
 if(!matches.length){
  for(const a of Object.values(directory)){
   if(String(a.iata||'').toUpperCase()===id||String(a.icao||'').toUpperCase()===id){matches.push(a);break;}
  }
 }
 const a=matches[0];
 const lat=Number(a?.lat),lon=Number(a?.lon);
 if(!a||!Number.isFinite(lat)||!Number.isFinite(lon)||Math.abs(lat)>90||Math.abs(lon)>180)return null;
 airportAliases[id]=[lat,lon];
 return airportAliases[id];
}
const canonicalAirport=code=>{const k=String(code||'').trim().toUpperCase();if(airportAliases[k])return airportAliases[k].join(',');return k;};
async function refreshForecasts(){
 if((model.density_method||'forecast')!=='forecast')return;
 const btn=$('wx-fetch');if(btn)btn.disabled=true;
 const jobs=[],groups=new Map(),now=Date.now();
 for(const [i,l] of model.legs.entries()){
  for(const side of ['departure','arrival']){
   const arrival=side==='arrival',code=String(arrival?l.destination:l.departure||'').trim().toUpperCase();
   const time=arrival?l.land_utc:l.to_utc,prefix=arrival?'arrival_':'';
   const statusKey=prefix+'forecast_status';
   let coords=airportAliases[code];
   const setUnavailable=reason=>{l[statusKey]=reason+' — existing selection preserved';};
   if(!coords&&code){
    try{coords=await airportCoordinates(code);}
    catch(err){setUnavailable('Airport lookup unavailable ('+String(err?.message||err)+')');continue;}
   }
   if(!coords){setUnavailable('Airport location unavailable ('+(code||'blank')+')');continue;}
   if(!l.trip_date||!/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(time||'')){setUnavailable('Scheduled UTC date/time unavailable');continue;}
   const utcDateValue=(arrival?l.arrival_utc_date:l.departure_utc_date)||l.trip_date;
   const utc=new Date(utcDateValue+'T'+time+':00Z'),delta=(utc.getTime()-now)/86400000;
   if(!Number.isFinite(delta)){setUnavailable('Invalid scheduled UTC date/time');continue;}
   if(delta<0){setUnavailable('Historical date — forecast unavailable');continue;}
   if(delta>15){setUnavailable('Outside forecast range');continue;}
   const key=coords.join(',')+'|'+utcDateValue;
   const job={i,l,side,code,time,key,prefix,field:arrival?'arrival_temperature_band':'temperature_band'};
   jobs.push(job);
   if(!groups.has(key))groups.set(key,{coords,date:utcDateValue,jobs:[]});
   groups.get(key).jobs.push(job);
  }
 }
 let ok=0,fail=0;
 // Fetch each airport/date once, even if it appears on multiple legs. This avoids
 // unnecessary provider calls and makes departure and arrival equally reliable.
 for(const group of groups.values()){
  const {coords,date}=group;
  const url=`https://api.open-meteo.com/v1/forecast?latitude=${coords[0]}&longitude=${coords[1]}&hourly=temperature_2m&timezone=GMT&start_date=${date}&end_date=${date}`;
  let data=null,error='';
  for(let attempt=0;attempt<2;attempt++){
   try{
    const resp=await fetch(url,{cache:'no-store'});
    if(!resp.ok)throw Error('HTTP '+resp.status);
    data=await resp.json();
    if(!Array.isArray(data.hourly?.time)||!Array.isArray(data.hourly?.temperature_2m))throw Error('Missing hourly temperatures');
    break;
   }catch(err){error=String(err?.message||err);if(attempt===0)await new Promise(resolve=>setTimeout(resolve,500));}
  }
  for(const job of group.jobs){
   const {l,time,prefix,field}=job,statusKey=prefix+'forecast_status',sourceKey=prefix+'forecast_source',tempKey=prefix+'forecast_temp_c';
   const hour=time.slice(0,2),stamp=date+'T'+hour+':00';
   const idx=data?.hourly?.time?.indexOf(stamp)??-1;
   const raw=idx>=0?data.hourly.temperature_2m[idx]:null;
   if(raw===null||raw===undefined||!Number.isFinite(Number(raw))){
    l[statusKey]='Forecast unavailable'+(error?' ('+error+')':' (no hourly value)')+' — existing selection preserved';
    fail++;continue;
   }
   const temp=Math.round(Number(raw));
   l[tempKey]=temp;l[field]=bandForCelsius(temp);l[sourceKey]='Open-Meteo';
   l[prefix+'forecast_fetched_at']=new Date().toISOString();
   l[statusKey]='Open-Meteo · '+job.code+' · Valid '+date+' '+hour+':00 UTC';
   ok++;
  }
 }
 // Count missing historical, unsupported, and incomplete airport/time inputs.
 fail+=model.legs.length*2-jobs.length;
 if(btn)btn.disabled=false;
 markDirty();render();
 const status=$('wx-fetch-status');
 if(status)status.textContent='Forecasts retrieved: '+ok+' of '+(model.legs.length*2)+' airport/time entries. Unavailable: '+fail+'. Existing selections preserved where unavailable.';
}

const order=(l,p)=>{const aircraft=ac(),d=density(l);if(!aircraft||!d)return null;const pounds=Math.max(0,n(l.plans[p].purchase_lb)),g=Math.ceil(pounds/d),unit=aircraft.refuel==='overwing'?2:1;return Math.ceil(g/unit)*unit;};
const emptyLeg=(prev)=>({trip_code:'',trip_date:'',departure_utc_date:'',arrival_utc_date:'',to_utc:'',land_utc:'',zfw_lb:'',fuel_purchase_method:'',departure:prev?prev.destination:'',destination:'',temperature_band:'',arrival_temperature_band:'',burn_lb:0,required_fuel_lb:0,fuel_price_per_gal:0,waiverable_ramp_fee_usd:0,minimum_gallons_for_waiver:0,mandatory_fees_usd:0,forecast_temp_c:'',forecast_source:'',forecast_status:'Not retrieved',plans:{'1':{purchase_lb:0},'2':{purchase_lb:0},'3':{purchase_lb:0}}});
function reset(){version=1;dirty=false;model={trip:'',tail:'',initial:0,density_method:'forecast',legs:[emptyLeg(),emptyLeg()]};render();}
function field(i,key,label,kind='text',extra=''){const l=model.legs[i],v=l[key]??'';return `<label>${label}<input data-i="${i}" data-field="${key}" type="${kind}" ${kind==='number'?`inputmode="${key==='fuel_price_per_gal'||key==='waiverable_ramp_fee_usd'||key==='mandatory_fees_usd'?'decimal':'numeric'}"`: ''} value="${esc(v)}" ${extra}></label>`;}
function utcfield(i,key,label){const l=model.legs[i],dateKey=key==='to_utc'?'departure_utc_date':'arrival_utc_date';const date=l[dateKey]||l.trip_date||'',time=l[key]||'';const display=date&&time?`${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(2,4)} ${time}`:'';return `<label>${label} (GMT)<input data-i="${i}" data-field="${key}" type="text" inputmode="text" placeholder="MM/DD/YY HH:MM" maxlength="14" value="${esc(display)}" title="GMT date and 24-hour time"><span class="field-note">MM/DD/YY HH:MM GMT</span></label>`;}
function parseGMTInput(v){v=String(v||'').trim();if(!v)return {date:'',time:''};const m=v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})\s+(\d{1,2}):(\d{2})$/);if(!m)return null;const year=Number(m[3].length===2?'20'+m[3]:m[3]),month=+m[1],day=+m[2],hour=+m[4],minute=+m[5];const d=new Date(Date.UTC(year,month-1,day));if(d.getUTCFullYear()!==year||d.getUTCMonth()!==month-1||d.getUTCDate()!==day||hour>23||minute>59)return null;return {date:`${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`,time:`${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}`};}
function displayGMT(l,arrival=false){const date=(arrival?l.arrival_utc_date:l.departure_utc_date)||l.trip_date||'',time=arrival?l.land_utc:l.to_utc;return date&&time?`${date.slice(5,7)}/${date.slice(8,10)}/${date.slice(2,4)} ${time} GMT`:'—';}
function bandfield(i,key,label){return `<label>${label}<select data-i="${i}" data-field="${key}"><option value="">Select temperature</option>${BANDS.map(b=>`<option value="${esc(b.label)}" ${model.legs[i][key]===b.label?'selected':''}>${esc(b.label)}</option>`).join('')}</select></label>`;}
function methodfield(i){return `<label>Fuel purchase method<select data-i="${i}" data-field="fuel_purchase_method"><option value="">Select method</option>${methodData.map(m=>`<option value="${esc(m)}" ${model.legs[i].fuel_purchase_method===m?'selected':''}>${esc(m)}</option>`).join('')}</select></label>`;}
function weatherField(i){const l=model.legs[i];return `<div class="temp-band-field">${bandfield(i,'temperature_band','Departure temperature range')}<span class="field-note">${esc(weatherStatus(l))}</span></div>`;}
function renderBaseline(){
$('tail').innerHTML='<option value="">Select aircraft</option>'+aircraftData.map(a=>`<option value="${esc(a.tail)}" ${a.tail===model.tail?'selected':''}>${esc(a.tail)}</option>`).join('');
$('type').value=ac()?.type||'';$('max').value=ac()?fmt(ac().max):'';$('refuel').value=!ac()?'':(ac().refuel==='overwing'?'Over-wing':'Single-point');$('initial').value=model.initial;
$('inputs').innerHTML=model.legs.map((l,i)=>`<article class="legrow"><div class="legbar"><h3>Leg ${i+1} <small>— ${esc(l.departure||'Departure')} → ${esc(l.destination||'Arrival')}</small></h3><div class="toolbar"><button class="danger" data-action="delete" data-i="${i}" ${model.legs.length<=2?'disabled':''}>Delete leg</button></div></div><div class="legfields">
${field(i,'trip_date','Trip date','date')}${field(i,'departure','Departure airport','text','maxlength="4"')}${field(i,'destination','Arrival airport','text','maxlength="4"')}${field(i,'burn_lb','Planned burn (lb)','number','min="0"')}${field(i,'required_fuel_lb','Required fuel (lb)','number','min="0"')}
${field(i,'trip_code','Trip code','text','maxlength="6"')}${utcfield(i,'to_utc','Departure time (UTC)')}${utcfield(i,'land_utc','Arrival time (UTC)')}${field(i,'arrival_fbo','Arrival FBO','text')}${field(i,'zfw_lb','Zero fuel weight (lb)','number','min="0"')}
<div class="blank-cell"></div>${weatherField(i)}<div>${bandfield(i,'arrival_temperature_band','Arrival temperature range')}<small class="wx-status">${esc(arrivalWeatherStatus(l))}</small></div><div class="blank-cell"></div><div class="blank-cell"></div>
<div class="group-title">Fuel purchasing & fees — ${esc(l.departure||'departure airport')}</div>
${field(i,'fuel_price_per_gal','Fuel price ($/gal)','number','min="0" step=".01"')}${methodfield(i)}${field(i,'waiverable_ramp_fee_usd','Waiverable ramp fee ($)','number','min="0" step=".01"')}${field(i,'minimum_gallons_for_waiver','Minimum buy to waive (gal)','number','min="0"')}${field(i,'mandatory_fees_usd','Mandatory fees ($)','number','min="0" step=".01"')}
</div></article>`).join('');
}
function comparison(l,i){if(i===0)return '';const prev=model.legs[i-1],delta=n(l.fuel_price_per_gal)-n(prev.fuel_price_per_gal),min=n(l.minimum_gallons_for_waiver),fee=n(l.waiverable_ramp_fee_usd);if(!(min>0&&fee>0&&n(l.fuel_price_per_gal)>0&&n(prev.fuel_price_per_gal)>0))return '';const premium=delta*min,net=premium-fee;let statement=net>0?`Tankering and paying the fee is ${money(net)} cheaper`:net<0?`Buying waiver quantity here is ${money(-net)} cheaper`:'Both options cost the same';return `<div class="tip"><b>Fuel cost versus fee — ${esc(l.departure)}:</b> Previous departure ${money(n(prev.fuel_price_per_gal))}/gal → here ${money(n(l.fuel_price_per_gal))}/gal; ${fmt(min)} gal waiver quantity, ${money(fee)} fee. <b>${statement}</b>, all else equal. <span class="auto">Informational only; does not change fuel buys or balances.</span></div>`;}
function compute(){
 const totals={'1':0,'2':0,'3':0},carry={'1':n(model.initial),'2':n(model.initial),'3':n(model.initial)},rows=[];
 model.legs.forEach((l,i)=>{const cells={};for(const p of ['1','2','3']){const buy=n(l.plans[p].purchase_lb),start=carry[p]+buy,land=start-n(l.burn_lb),g=order(l,p),min=n(l.minimum_gallons_for_waiver),fee=g===null?null:(min>0&&g>=min?0:n(l.waiverable_ramp_fee_usd)),cost=g===null?null:g*n(l.fuel_price_per_gal)+fee+n(l.mandatory_fees_usd),issues=[];if(!ac())issues.push('SELECT AIRCRAFT');if(!density(l))issues.push('SELECT DEPARTURE TEMPERATURE');if(start<n(l.required_fuel_lb))issues.push(`START FUEL BELOW REQUIRED: ${fmt(start)} < ${fmt(n(l.required_fuel_lb))} lb`);if(ac()&&start>ac().max)issues.push(`START FUEL EXCEEDS MAX: ${fmt(start)} > ${fmt(ac()?.max)} lb`);if(land<0)issues.push('NEGATIVE LANDING FUEL');if(!l.departure||!l.destination)issues.push('INCOMPLETE AIRPORT ENTRY');cells[p]={carry:carry[p],buy,start,land,g,fee,cost,issues};carry[p]=land;if(cost!==null)totals[p]+=cost;}rows.push(cells);});return {totals,carry,rows};
}
function planCard(l,i,p,c){const min=n(l.minimum_gallons_for_waiver),met=c.g!==null&&min>0&&c.g>=min;return `<div class="plan-card"><h4>Plan ${p}</h4><div class="buyfield"><label>Fuel BUY at ${esc(l.departure||'departure')} (lb)<input type="number" min="0" step="1" data-plan="${p}" data-i="${i}" value="${c.buy}" inputmode="numeric"></label></div>
<div class="stat"><span>Fuel carried in</span><strong>${fmt(c.carry)} lb</strong></div>
<div class="stat ${c.issues.some(x=>x.includes('START'))?'critical':''}"><span>Start fuel</span><strong>${fmt(c.start)} lb</strong></div>
<div class="stat"><span>Planned burn</span><strong>${fmt(n(l.burn_lb))} lb</strong></div>
<div class="stat"><span>Landing fuel</span><strong>${fmt(c.land)} lb</strong></div>
<div class="stat"><span>Order at ${esc(l.departure)}</span><strong>${c.g===null?'—':fmt(c.g)} gal${ac()?.refuel==='overwing'?` (${c.g===null?'—':fmt(c.g/2)}/wing)`:''}</strong></div>
<div class="stat"><span>Waiver threshold</span><strong>${min>0?(met?'<span class="good">Met</span>':'<span class="waiver-not-met">Not met</span>'):'Not specified'}</strong></div>
<div class="stat"><span>Ramp fee charged</span><strong>${c.fee===null?'—':money(c.fee)}</strong></div>
<div class="leg-cost">Fuel + fees: ${c.cost===null?'—':money(c.cost)}</div>${c.issues.map(x=>`<div class="alert" role="alert">${esc(x)}</div>`).join('')}</div>`;}
function renderPlans(){const x=compute();
$('summary').innerHTML=`<table class="sumtable"><thead><tr><th>Trip comparison</th>${['1','2','3'].map(p=>`<th>Plan ${p}</th>`).join('')}</tr></thead><tbody><tr><td>Calculated trip cost</td>${['1','2','3'].map(p=>`<td><b>${money(x.totals[p])}</b></td>`).join('')}</tr></tbody></table>`;
$('planlegs').innerHTML=model.legs.map((l,i)=>`<article class="legrow"><div class="legbar"><h3>Leg ${i+1}: ${esc(l.departure)} → ${esc(l.destination||'—')}</h3><a class="section-link" href="#baseline">Edit baseline data ↑</a></div><div style="padding:12px">${comparison(l,i)}<div class="plan-grid">${['1','2','3'].map(p=>planCard(l,i,p,x.rows[i][p])).join('')}</div></div></article>`).join('');
}
function render(){if($('density-method'))$('density-method').value=model.density_method||'forecast';if($('wx-fetch'))$('wx-fetch').disabled=(model.density_method||'forecast')!=='forecast';renderBaseline();renderPlans();renderStatus();}
function renderStatus(){const first=model.legs[0]||{},code=(first.trip_code||'NEW TRIP').toUpperCase();$('tripstatus').textContent=code+' — Version '+String(version).padStart(2,'0');$('dirtyflag').textContent=dirty?'Unsaved changes':'';}
function markDirty(){dirty=true;renderStatus();}
function normalizeTrip(obj){if(!Array.isArray(obj.legs)||obj.legs.length<2||!obj.legs.every(l=>l.plans&&['1','2','3'].every(p=>l.plans[p])))throw Error('Invalid trip file');return {trip:obj.trip||'',tail:obj.tail||'',initial:n(obj.initial),density_method:obj.density_method||'forecast',legs:obj.legs.map(l=>({...emptyLeg(),...l,fuel_purchase_method:LEGACY_METHODS[l.fuel_purchase_method]||l.fuel_purchase_method||'',trip_code:String(l.trip_code||'').toUpperCase().slice(0,6),departure:String(l.departure||'').toUpperCase().slice(0,4),destination:String(l.destination||'').toUpperCase().slice(0,4)}))};}
function tripFileName(){const l=model.legs[0]||{},date=String(l.trip_date||'').replace(/-/g,''),code=String(l.trip_code||'').toUpperCase();return ( /^\d{8}$/.test(date)?date:'UNDATED')+'_'+(/^[A-Z0-9]{6}$/.test(code)?code:'NEWTRP')+'_V'+String(version).padStart(2,'0')+'.json';}
function download(name,data){const a=document.createElement('a'),url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);}
function storeDraft(){try{localStorage.setItem('ozair-v031a-pilot-draft',JSON.stringify({model,version}));}catch(e){}}
function saveTrip(next=false){if(next)version++;const name=tripFileName();download(name,{format:'ozair-v012-trip',version,...model});savedName=name;dirty=false;storeDraft();renderStatus();}
function safeLeave(){if(!dirty)return true;return confirm('You have unsaved changes. Continue without saving? Choose Cancel to return and save the trip first.');}
function openView(id){if(id==='home'&&$('planner').hidden===false&&!safeLeave())return;document.querySelectorAll('.view').forEach(v=>v.hidden=v.id!==id);if(id==='calculator')clearCalculator();if(id==='datacard')renderDataCard();if(id==='admin')renderAdmin();window.scrollTo(0,0);}

$('inputs').addEventListener('change',e=>{const t=e.target;if(!t.dataset.field)return;const i=Number(t.dataset.i),f=t.dataset.field;if(['to_utc','land_utc'].includes(f)){const parsed=parseGMTInput(t.value);if(!parsed){alert('Enter GMT date/time as MM/DD/YY HH:MM (example: 10/23/26 00:30).');t.focus();return;}model.legs[i][f]=parsed.time;model.legs[i][f==='to_utc'?'departure_utc_date':'arrival_utc_date']=parsed.date;}else{model.legs[i][f]=t.type==='number'?(t.value===''?'':n(t.value)):(['departure','destination','trip_code'].includes(f)?t.value.toUpperCase().trim():t.value);}if(f==='temperature_band'){model.legs[i].forecast_source='manual';model.legs[i].forecast_status='Manual temperature band selected';model.legs[i].forecast_temp_c='';}if(f==='arrival_temperature_band'){model.legs[i].arrival_forecast_source='manual';model.legs[i].arrival_forecast_status='Manual temperature band selected';model.legs[i].arrival_forecast_temp_c='';}
if(f==='destination'&&model.legs[i+1]){const next=model.legs[i+1],old=canonicalAirport(next.departure),prior=canonicalAirport(t.dataset.oldValue||'');if(!next.departure||old===canonicalAirport(t.dataset.oldValue||'')||confirm('Next leg has a different departure airport. Replace it with '+model.legs[i].destination+'?'))next.departure=model.legs[i].destination;}
markDirty();render();});
$('inputs').addEventListener('focusin',e=>{const t=e.target;if(['destination','arrival_temperature_band'].includes(t.dataset.field))t.dataset.oldValue=t.value;},true);
$('inputs').addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(!b)return;const i=Number(b.dataset.i),a=b.dataset.action;if(a==='delete'&&model.legs.length>2)model.legs.splice(i,1);markDirty();render();});
$('planlegs').addEventListener('change',e=>{const t=e.target;if(!t.dataset.plan)return;model.legs[Number(t.dataset.i)].plans[t.dataset.plan].purchase_lb=Math.max(0,n(t.value));markDirty();renderPlans();});
$('add').onclick=()=>{model.legs.push(emptyLeg(model.legs.at(-1)));markDirty();render();};
$('tail').onchange=e=>{model.tail=e.target.value;markDirty();render();};$('initial').onchange=e=>{model.initial=Math.max(0,n(e.target.value));markDirty();renderPlans();};

$('newtrip').onclick=()=>{if(!safeLeave())return;document.dispatchEvent(new Event('ozair-newtrip')); model={trip:'',tail:'',initial:0,density_method:'forecast',legs:[emptyLeg(),emptyLeg()]};version=1;dirty=true;render();};
$('savefile').onclick=()=>saveTrip(false);
$('newversion').onclick=()=>saveTrip(true);
$('openfile').onclick=()=>{if(safeLeave())$('import').click();};
$('import').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const obj=JSON.parse(await f.text());model=normalizeTrip(obj);version=Math.max(1,Math.floor(n(obj.version)||1));dirty=false;savedName=f.name;render();storeDraft();}catch(err){alert('Could not open trip: '+err.message)}e.target.value='';};
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>openView(b.dataset.view));
function preciseDensity(tempC){if(!Number.isFinite(tempC))return null;const t=Math.round(tempC);const row=preciseData.find(x=>x[0]===t);return row?row[1]:null;}
function clearCalculator(){['calc-have','calc-need','calc-temp'].forEach(id=>$(id).value='');$('calc-tail').value='';$('calc-unit').value='C';renderCalculator();}
$('calc-clear').onclick=clearCalculator;
function renderCalculator(){const tail=$('calc-tail'),previous=tail.value;tail.innerHTML='<option value="">Select aircraft</option>'+aircraftData.map(a=>`<option value="${esc(a.tail)}">${esc(a.tail)}</option>`).join('');tail.value=previous||'';calculate();}
function calculate(){if(!$('calc-tail').value||!$('calc-have').value.trim()||!$('calc-need').value.trim()||!$('calc-temp').value.trim()){$('calc-results').innerHTML='';return;}const tail=$('calc-tail').value,a=aircraftData.find(x=>x.tail===tail),have=Number($('calc-have').value),need=Number($('calc-need').value),raw=Number($('calc-temp').value),temp=$('calc-unit').value==='F'?(raw-32)*5/9:raw,validTemp=$('calc-temp').value.trim()!==''&&Number.isInteger(raw),density=validTemp?preciseDensity(temp):null,validFuel=$('calc-have').value!==''&&$('calc-need').value!==''&&have>=0&&need>=0,delta=Math.max(0,need-have),g=density?Math.ceil(delta/density):0,order=a&&density?(a.refuel==='overwing'?Math.ceil(g/2)*2:g):null,errors=[];if(!a)errors.push('Select an aircraft tail number.');if(!validFuel)errors.push('Enter valid onboard and desired fuel quantities.');if(!validTemp)errors.push('Temperature must be a whole number.');if(validTemp&&!density)errors.push('Temperature is outside the verified Worksheet 3 table; no fueling order calculated.');if(a&&need>n(a.max))errors.push(`WARNING: Desired fuel ${fmt(need)} lb exceeds ${fmt(a.max)} lb maximum for ${a.tail}.`);if(validFuel&&need<have)errors.push('Desired fuel is less than fuel onboard; no fuel purchase is needed.');$('calc-results').innerHTML=`<div class="metric">Fuel to purchase <b>${validFuel?fmt(delta)+' lb':'—'}</b></div><div class="metric">Total gallons to order <b>${order===null||!validFuel?'—':fmt(order)+' gal'}</b></div><div class="metric">Gallons per wing <b>${order===null||!validFuel?'—':a.refuel==='overwing'?fmt(order/2)+' gal':'N/A — single-point'}</b></div><div class="tip" style="grid-column:1/-1">${errors.map(x=>`<p class="error">${esc(x)}</p>`).join('')}</div>`;}
['calc-tail','calc-have','calc-need','calc-temp','calc-unit'].forEach(id=>$(id).addEventListener('input',calculate));
function sortPilots(){pilotData.sort((a,b)=>{const parts=x=>{const v=String(x||'').trim();if(v.includes(',')){const p=v.split(',');return [p[0].trim(),p.slice(1).join(',').trim()];}const p=v.split(/\s+/);return [p.pop()||'',p.join(' ')];};const aa=parts(a.name),bb=parts(b.name);return aa[0].localeCompare(bb[0],undefined,{sensitivity:'base'})||aa[1].localeCompare(bb[1],undefined,{sensitivity:'base'});});}
function renderAdmin(){sortPilots();
$('admin-aircraft').innerHTML=`<div class="admin-scroll"><table class="admin-table"><thead><tr><th>Tail</th><th>Type</th><th>Max fuel (lb)</th><th>Fueling</th><th>Order</th><th></th></tr></thead><tbody>${aircraftData.map((a,i)=>`<tr><td><input data-table="aircraft" data-i="${i}" data-key="tail" value="${esc(a.tail)}" maxlength="12"></td><td><input data-table="aircraft" data-i="${i}" data-key="type" value="${esc(a.type)}"></td><td><input data-table="aircraft" data-i="${i}" data-key="max" type="number" min="1" value="${a.max}" inputmode="numeric"></td><td><select data-table="aircraft" data-i="${i}" data-key="refuel"><option value="overwing" ${a.refuel==='overwing'?'selected':''}>Over-wing</option><option value="single" ${a.refuel==='single'?'selected':''}>Single-point</option></select></td><td class="order-controls"><button type="button" class="alt" data-move="aircraft" data-i="${i}" data-dir="-1" ${i===0?'disabled':''} aria-label="Move aircraft up">↑</button><button type="button" class="alt" data-move="aircraft" data-i="${i}" data-dir="1" ${i===aircraftData.length-1?'disabled':''} aria-label="Move aircraft down">↓</button></td><td><button class="danger" data-remove="aircraft" data-i="${i}">Delete</button></td></tr>`).join('')}</tbody></table></div>`;
$('admin-methods').innerHTML=`<div class="admin-scroll"><table class="admin-table"><tbody>${methodData.map((m,i)=>`<tr><td><input data-table="methods" data-i="${i}" value="${esc(m)}"></td><td class="order-controls"><button type="button" class="alt" data-move="methods" data-i="${i}" data-dir="-1" ${i===0?'disabled':''} aria-label="Move method up">↑</button><button type="button" class="alt" data-move="methods" data-i="${i}" data-dir="1" ${i===methodData.length-1?'disabled':''} aria-label="Move method down">↓</button></td><td><button class="danger" data-remove="methods" data-i="${i}">Delete</button></td></tr>`).join('')}</tbody></table></div>`;
$('admin-pilots').innerHTML=`<div class="admin-scroll"><table class="admin-table"><thead><tr><th>Pilot</th><th>Cell phone</th><th>Work email</th><th></th></tr></thead><tbody>${pilotData.map((r,i)=>`<tr><td><input data-table="pilots" data-i="${i}" data-key="name" value="${esc(r.name)}"></td><td><input type="tel" data-table="pilots" data-i="${i}" data-key="cell" value="${esc(r.cell)}"></td><td><input type="email" data-table="pilots" data-i="${i}" data-key="email" value="${esc(r.email)}"></td><td><button class="danger" data-remove="pilots" data-i="${i}">Delete</button></td></tr>`).join('')}</tbody></table></div>`;}
function storeRefs(){sortPilots();try{localStorage.setItem('ozair-v012-refs',JSON.stringify({aircraftData,methodData,pilotData}));}catch(e){}}
$('admin').addEventListener('change',e=>{const t=e.target,table=t.dataset.table,i=Number(t.dataset.i);if(!table)return;if(table==='aircraft'){const key=t.dataset.key,v=key==='tail'?t.value.toUpperCase().trim():key==='max'?Number(t.value):t.value;if((key==='max'&&!(v>0))||(key==='tail'&&!v)){alert('Invalid aircraft value');renderAdmin();return;}if(key==='tail'&&aircraftData.some((a,j)=>j!==i&&a.tail===v)){alert('Tail number must be unique');renderAdmin();return;}aircraftData[i][key]=v;}else if(table==='methods'){const v=t.value.trim();if(!v){alert('Method cannot be blank');renderAdmin();return;}methodData[i]=v;}else if(table==='pilots'){const key=t.dataset.key,v=t.value.trim();if(!v||(key==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))){alert('Enter a valid pilot '+key);renderAdmin();return;}pilotData[i][key]=v;}storeRefs();renderAdmin();});
$('admin').addEventListener('click',e=>{const move=e.target.closest('[data-move]');if(move){const arr=move.dataset.move==='aircraft'?aircraftData:methodData,i=Number(move.dataset.i),j=i+Number(move.dataset.dir);if(j>=0&&j<arr.length){[arr[i],arr[j]]=[arr[j],arr[i]];storeRefs();renderAdmin();render();}return;}const b=e.target.closest('[data-remove]');if(!b)return;const i=Number(b.dataset.i);if(!confirm('Delete this reference record?'))return;if(b.dataset.remove==='aircraft'){if(aircraftData.length<=1)return alert('At least one aircraft is required');aircraftData.splice(i,1);if(!aircraftData.some(a=>a.tail===model.tail))model.tail=aircraftData[0].tail;}else if(b.dataset.remove==='pilots')pilotData.splice(i,1);else methodData.splice(i,1);storeRefs();renderAdmin();});
$('add-aircraft').onclick=()=>{aircraftData.push({tail:'NEW'+aircraftData.length,type:'New aircraft',max:1,refuel:'overwing'});storeRefs();renderAdmin();};
$('add-method').onclick=()=>{methodData.push('New method');storeRefs();renderAdmin();};
$('add-pilot').onclick=()=>{pilotData.push({name:'New Pilot',cell:'',email:''});storeRefs();renderAdmin();};
$('admin-export').onclick=()=>download('OzAir_Reference_Data.json',{format:'ozair-v012-references',aircraftData,methodData,pilotData});
$('admin-import').onclick=()=>$('admin-file').click();
$('admin-file').onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const o=JSON.parse(await f.text());if(!Array.isArray(o.aircraftData)||!o.aircraftData.length||!Array.isArray(o.methodData))throw Error('Not a valid reference backup');if(!confirm('Replace the current reference database?'))return;aircraftData=o.aircraftData;methodData=o.methodData;pilotData=Array.isArray(o.pilotData)?o.pilotData:clone(PILOTS);sortPilots();storeRefs();renderAdmin();}catch(err){alert('Restore failed: '+err.message)}e.target.value='';};
$('admin-reset').onclick=()=>{if(!confirm('Restore all original reference data?'))return;aircraftData=clone(AIRCRAFT);methodData=[...METHODS];pilotData=clone(PILOTS);storeRefs();renderAdmin();};
try{const r=JSON.parse((localStorage.getItem('ozair-v012-refs')||localStorage.getItem('ozair-v010-refs')||localStorage.getItem('ozair-v09-refs')||'null'));if(r&&Array.isArray(r.aircraftData)&&r.aircraftData.length){aircraftData=r.aircraftData;methodData=r.methodData;pilotData=Array.isArray(r.pilotData)?r.pilotData:clone(PILOTS);}}catch(e){}
// Approved fleet additions must also reach devices with existing locally saved references.
if(!aircraftData.some(a=>a.tail==='275LX')){const pos=aircraftData.findIndex(a=>a.tail==='586FD');aircraftData.splice(pos<0?aircraftData.length:pos+1,0,{tail:'275LX',type:'CJ3',max:4710,refuel:'overwing'});storeRefs();}
// One-time roster migration: retain existing locally edited pilot records.
try{if(!localStorage.getItem('ozair-v015-evers-migrated')){if(!pilotData.some(p=>p.name?.trim().toLowerCase()==='evers, kenneth'||p.email?.trim().toLowerCase()==='kevers@burgessaircraft.com')){pilotData.push({name:'Evers, Kenneth',cell:'417-619-4514',email:'kevers@burgessaircraft.com'});sortPilots();storeRefs();}localStorage.setItem('ozair-v015-evers-migrated','1');}}catch(e){}
try{const d=JSON.parse((localStorage.getItem('ozair-v031a-pilot-draft')||'null'));if(d&&d.model){model=normalizeTrip(d.model);version=Math.max(1,Math.floor(n(d.version)||1));dirty=false;render();}else reset();}catch(e){reset();}

function cardTime(t){return /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(t||'')?t:'—';}
function cardDuration(a,b){if(cardTime(a)==='—'||cardTime(b)==='—')return '—';const [ah,am]=a.split(':').map(Number),[bh,bm]=b.split(':').map(Number);let m=(bh*60+bm-ah*60-am+1440)%1440;return String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0');}
function cardVal(v,suffix=''){return v===undefined||v===null||v===''?'—':esc(v)+suffix;}
// v0.32.25 pagination: maximum four complete legs per physical half-sheet.
let cardPageEnds=[];
function cardGroups(){
 const count=model.legs.length;
 if(count<=4)return [Array.from({length:count},(_,i)=>i)];
 const ends=[...new Set(cardPageEnds.filter(v=>Number.isInteger(v)&&v>=1&&v<count))].sort((a,b)=>a-b);
 const groups=[];let from=0;
 for(const to of [...ends,count]){if(to>from){groups.push(Array.from({length:to-from},(_,i)=>from+i));from=to;}}
 return groups;
}
function ensureCardPages(){
 const count=model.legs.length;
 if(count<=4){cardPageEnds=[];return;}
 const groups=cardGroups();
 if(groups.length===0||groups.some(g=>g.length>4)||groups.flat().length!==count){cardPageEnds=[];for(let i=4;i<count;i+=4)cardPageEnds.push(i);}
}
function cardPageUI(){
 const el=$('card-pagination'),count=model.legs.length;
 if(count<=4){el.hidden=true;el.innerHTML='';return;}
 el.hidden=false;
 const groups=cardGroups(),ends=cardPageEnds.join(', ');
 el.innerHTML=`<b>Data Card half-page layout — ${count} legs</b><p><b>Automatic:</b> up to four legs per half-page. <b>Manual:</b> enter the leg numbers <em>after which</em> a half-page break should occur, separated by commas. For seven legs, <b>2, 5</b> places Legs 1–2 on Half 1, Legs 3–5 on Half 2, and Legs 6–7 on Half 3. Enter each required break; the final half-page ends with the last leg. No half-page may contain more than four legs.</p><label>Half-page breaks (after leg numbers): <input id="card-page-ends" type="text" style="width:200px" value="${esc(ends)}" placeholder="e.g. 2, 5"></label><button type="button" id="card-apply-pages">Apply Breaks</button><button type="button" id="card-default-pages" class="alt">Restore Automatic Breaks</button><p class="muted">${groups.map((g,i)=>`Half ${i+1}: Legs ${g[0]+1}–${g[g.length-1]+1}`).join(' | ')}. Print at 100% scale on US Letter, portrait. Check actual printer output before cockpit use.</p>`;
}
function renderDataCard(){
 const plan=$('card-plan').value||'1',computed=compute();
 $('card-tail').textContent='Aircraft: '+(model.tail||'—')+'  •  Plan '+plan;
 ensureCardPages();cardPageUI();
 const groups=cardGroups();
 const overwing=ac()?.refuel==='overwing';
 const item=(name,val)=>`<div class="dc-item"><span>${name}</span><strong>${val}</strong></div>`;
 const cardGMT=(l,arrival=false)=>displayGMT(l,arrival).replace(/\s*GMT$/i,'');
 const halves=groups.map((group,half)=>`<div class="dc-sheet" aria-label="Data Card half ${half+1}"><div class="dc-sheet-head"><b>OZAIR FLIGHT DATA CARD</b><span>${esc(model.tail||'—')} · Plan ${esc(plan)} · Half ${half+1}/${groups.length}</span></div>${group.map(i=>{const l=model.legs[i],c=computed.rows[i][plan];const fuelReady=!!ac()&&density(l)!==null;const gallons=c.g===null?'—':fmt(c.g)+' gal';const perWing=overwing&&c.g!==null?fmt(c.g/2)+' gal':'—';return `<article class="dc-leg"><div class="dc-leg-meta"><b>LEG ${i+1}</b><span>${cardVal(l.trip_date)} · ${cardVal(l.trip_code)}</span></div><div class="dc-topline"><div class="dc-depart"><span class="dc-small-label">DEPARTURE</span><strong>${cardVal(l.departure)} <small class="dc-elevation">${l.fp_departure_elev!==null&&l.fp_departure_elev!==undefined&&l.fp_departure_elev!==''?`(${esc(l.fp_departure_elev)}')`:''}</small></strong><span class="dc-purchase">${cardVal(l.departure)} Fuel Purchase: <b>${cardVal(l.fuel_purchase_method)}</b></span></div>${item('TAKEOFF GMT',cardGMT(l))}<div class="dc-arrive"><span class="dc-small-label">ARRIVAL</span><strong>${cardVal(l.destination)} <small class="dc-elevation">${l.fp_arrival_elev!==null&&l.fp_arrival_elev!==undefined&&l.fp_arrival_elev!==''?`(${esc(l.fp_arrival_elev)}')`:''}</small></strong><span class="dc-fbo">FBO: <b>${cardVal(l.arrival_fbo)}</b></span></div>${item('LAND GMT',cardGMT(l,true))}${item('FLT TIME',cardDuration(l.to_utc,l.land_utc))}${item('ZFW',cardVal(l.zfw_lb,' lb'))}</div><div class="dc-line-two">${item('FOB',fuelReady?fmt(c.start)+' lb':'—')}${item('PLANNED BURN',fmt(n(l.burn_lb))+' lb')}${item('LAND FUEL',fuelReady?fmt(c.land)+' lb':'—')}<div class="dc-item dc-fuel-buy"><span>FUEL BUY</span><strong>${gallons}${overwing?` <small>(${perWing}/wing)</small>`:''}</strong></div>${item('MIN BUY',fmt(n(l.minimum_gallons_for_waiver))+' gal')}</div><div class="dc-flightplan-line">${item('ROUTE',cardVal(l.fp_route))}${item('ALT',cardVal(l.fp_altitude))}${item('ALTN',cardVal(l.fp_alternate))}${item('ST LINE',cardVal(l.fp_distance_nm,' NM'))}</div></article>`}).join('')}</div>`);
 $('card-rows').innerHTML=Array.from({length:Math.ceil(halves.length/2)},(_,page)=>`<div class="dc-paper"><div class="dc-half">${halves[page*2]||''}</div><div class="dc-fold-gap"></div><div class="dc-half">${halves[page*2+1]||''}</div></div>`).join('');

}
$('card-plan').addEventListener('change',renderDataCard);
$('card-pagination').addEventListener('click',e=>{
 if(e.target.id==='card-default-pages'){cardPageEnds=[];ensureCardPages();renderDataCard();return;}
 if(e.target.id!=='card-apply-pages')return;
 const raw=$('card-page-ends').value.trim(),count=model.legs.length;
 const parts=raw?raw.split(',').map(v=>v.trim()):[];
 const ends=parts.map(Number);
 if(!parts.length||ends.some((v,i)=>!/^\d+$/.test(parts[i])||!Number.isInteger(v))||ends.some((v,i)=>v<1||v>=count||(i>0&&v<=ends[i-1]))){alert('Enter the leg numbers after which to break, in increasing order, separated by commas. Do not include the final leg.');return;}
 let last=0;
 for(const end of [...ends,count]){if(end-last<1||end-last>4){alert('Invalid half-page breaks: each half-page must contain 1–4 legs. Specify additional break numbers where needed.');return;}last=end;}
 cardPageEnds=ends;renderDataCard();
});
$('card-rows').addEventListener('change',e=>{const t=e.target;if(!t.matches('[data-actual-i]'))return;const i=Number(t.dataset.actualI);if(t.value!==''&&(!Number.isFinite(Number(t.value))||Number(t.value)<0)){alert('Enter a nonnegative actual fuel burn, or leave blank.');renderDataCard();return;}model.legs[i].actual_burn_lb=t.value;markDirty();storeDraft();});
function pdfName(kind){const l=model.legs[0]||{},date=(l.trip_date||'').replace(/-/g,''),code=l.trip_code||'NEWTRP';return `${/^\d{8}$/.test(date)?date:'UNDATED'}_${kind}_${code}_${model.tail||'AIRCRAFT'}`;}
// v0.32.25: PDF vector export. No SVG foreignObject, canvas, external libraries, or network.
// The same Data Card DOM is laid out at print width, then text and rules are written
// directly into a PDF. The iPad Share Sheet receives a genuine application/pdf file.
function isIPadStandalone(){
 const standalone=window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
 const ipad=/iPad|iPhone|iPod/.test(navigator.userAgent)||(/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints>1);
 return standalone&&ipad;
}
function pdfEscapeText(s){
 const win1252={8364:128,8218:130,402:131,8222:132,8230:133,8224:134,8225:135,710:136,8240:137,352:138,8249:139,338:140,381:142,8216:145,8217:146,8220:147,8221:148,8226:149,8211:150,8212:151,732:152,8482:153,353:154,8250:155,339:156,382:158,376:159};
 let r='';for(const ch of s){const cp=ch.codePointAt(0);const n=cp<256?cp:(win1252[cp]||63);r+=(n===40||n===41||n===92?'\\':'')+String.fromCharCode(n);}return r;
}
function pdfColor(css){const m=(css||'').match(/rgba?\(([^)]+)\)/);if(!m)return null;const v=m[1].split(',').map(Number);if(v.length>3&&v[3]===0)return null;return v.slice(0,3).map(x=>Math.max(0,Math.min(1,x/255)).toFixed(3)).join(' ');}
function makeVectorPDF(pageStreams){
 const enc=new TextEncoder(), chunks=[],offsets=[0];let length=0;
 const add=b=>{chunks.push(b);length+=b.length;},ascii=t=>add(enc.encode(t));
 const obj=(id,body)=>{offsets[id]=length;ascii(id+' 0 obj\n'+body+'\nendobj\n');};
 const stream=(id,data)=>{const bytes=enc.encode(data);offsets[id]=length;ascii(id+' 0 obj\n<< /Length '+bytes.length+' >>\nstream\n');add(bytes);ascii('\nendstream\nendobj\n');};
 ascii('%PDF-1.4\n');obj(1,'<< /Type /Catalog /Pages 2 0 R >>');
 obj(2,'<< /Type /Pages /Kids ['+pageStreams.map((_,i)=>6+i*2+' 0 R').join(' ')+'] /Count '+pageStreams.length+' >>');
 obj(3,'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');
 obj(4,'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
 obj(5,'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>');
 pageStreams.forEach((data,i)=>{const id=6+i*2;obj(id,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents '+(id+1)+' 0 R >>');stream(id+1,data);});
 const start=length;ascii('xref\n0 '+(6+pageStreams.length*2)+'\n0000000000 65535 f \n');
 for(let i=1;i<6+pageStreams.length*2;i++)ascii(String(offsets[i]).padStart(10,'0')+' 00000 n \n');
 ascii('trailer\n<< /Size '+(6+pageStreams.length*2)+' /Root 1 0 R >>\nstartxref\n'+start+'\n%%EOF');
 const bytes=new Uint8Array(length);let pos=0;for(const c of chunks){bytes.set(c,pos);pos+=c.length;}return bytes;
}
function cardVectorPage(source){
 // 8in wide, two 5in halves separated by 0.5in; PDF at US Letter size.
 const root=document.createElement('div');root.className='ozair-pdf-layout';
 root.style.cssText='position:fixed;left:-12000px;top:0;width:768px;height:1008px;background:#fff;color:#111;z-index:-1;overflow:hidden;pointer-events:none;font-family:Arial,sans-serif;';
 const clone=source.cloneNode(true);clone.style.cssText='width:768px!important;max-width:none!important;margin:0!important;padding:0!important;display:grid!important;grid-template-rows:480px 48px 480px!important;height:1008px!important;';
 root.appendChild(clone);document.body.appendChild(root);
 const override=document.createElement('style');override.textContent=`.ozair-pdf-layout .dc-half{height:480px!important;max-height:480px!important;overflow:hidden!important}.ozair-pdf-layout .dc-fold-gap{height:48px!important}.ozair-pdf-layout .dc-sheet{margin:0!important;padding:0!important;width:768px!important}.ozair-pdf-layout .dc-sheet-head{font-size:10px!important;margin:0 0 3px!important;padding:0 2px 3px!important}.ozair-pdf-layout .dc-sheet-head b{font-size:12px!important}.ozair-pdf-layout .dc-leg{padding:3px 4px!important}.ozair-pdf-layout .dc-topline{gap:4px!important}.ozair-pdf-layout .dc-item span,.ozair-pdf-layout .dc-small-label{font-size:9px!important}.ozair-pdf-layout .dc-item strong,.ozair-pdf-layout .dc-depart strong,.ozair-pdf-layout .dc-arrive strong{font-size:11px!important}`;
 root.appendChild(override);
 try{
  const base=root.getBoundingClientRect();const sx=0.75,sy=0.75;
  let commands='';const xy=(x,y)=>[(x-base.left)*sx,(y-base.top)*sy];
  const walk=el=>{
   if(el.nodeType===3){const text=el.nodeValue;if(!text||!text.trim())return;const parent=el.parentElement;if(!parent)return;
    const style=getComputedStyle(parent);if(style.visibility==='hidden'||style.display==='none'||Number(style.opacity)===0)return;
    const color=pdfColor(style.color)||'0 0 0';const size=Math.max(4,parseFloat(style.fontSize)*sx);const font=/bold|[6-9]00/.test(style.fontWeight)?'F2':(/italic|oblique/.test(style.fontStyle)?'F3':'F1');
    // Measure individual runs so wrapping is faithfully reflected in PDF coordinates.
    const re=/\S+|\s+/g;let m;const range=document.createRange();
    while((m=re.exec(text))){if(!m[0].trim())continue;range.setStart(el,m.index);range.setEnd(el,m.index+m[0].length);const rects=[...range.getClientRects()];
     for(const r of rects){if(!r.width||!r.height)continue;const [x,y]=xy(r.left,r.top);if(x< -1||y< -1||x>612||y>792)continue;
      const baseline=792-y-(r.height*sx)*0.79;
      commands+=`BT /${font} ${size.toFixed(2)} Tf ${color} rg 1 0 0 1 ${x.toFixed(2)} ${baseline.toFixed(2)} Tm (${pdfEscapeText(m[0])}) Tj ET\n`;
     }
    }
    return;
   }
   if(el.nodeType!==1||el===override)return;const st=getComputedStyle(el);if(st.display==='none'||st.visibility==='hidden')return;
   const r=el.getBoundingClientRect();const [x,y]=xy(r.left,r.top),w=r.width*sx,h=r.height*sy;
   if(w>0&&h>0&&x>=-1&&y>=-1&&x+w<=614&&y+h<=794){
    const bg=pdfColor(st.backgroundColor);if(bg&&bg!=='1.000 1.000 1.000')commands+=`${bg} rg ${x.toFixed(2)} ${(792-y-h).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re f\n`;
    for(const side of ['Top','Bottom','Left','Right']){const bw=parseFloat(st['border'+side+'Width']);const bc=pdfColor(st['border'+side+'Color']);if(bw>0&&bc&&st['border'+side+'Style']!=='none'){
     const xx=side==='Right'?x+w:x, yy=side==='Bottom'?792-y-h:792-y;
     const xx2=(side==='Top'||side==='Bottom')?x+w:xx,yy2=(side==='Left'||side==='Right')?792-y-h:yy;
     commands+=`${bc} RG ${Math.max(0.3,bw*sx).toFixed(2)} w ${xx.toFixed(2)} ${yy.toFixed(2)} m ${xx2.toFixed(2)} ${yy2.toFixed(2)} l S\n`;
    }}
   }
   for(const child of el.childNodes)walk(child);
  };
  walk(clone);return commands;
 }finally{root.remove();}
}
async function exportCardPDF(){
 renderDataCard();const button=$('card-print'),original=button.textContent;button.disabled=true;button.textContent='Creating PDF…';
 try{
  const pages=[...document.querySelectorAll('#card-rows > .dc-paper')];if(!pages.length)throw new Error('No Flight Data Card pages available.');
  const streams=pages.map(cardVectorPage);if(streams.some(x=>x.length<150))throw new Error('PDF contains no card content.');
  const bytes=makeVectorPDF(streams),blob=new Blob([bytes],{type:'application/pdf'}),name=pdfName('Data_Card')+'.pdf';
  const file=new File([blob],name,{type:'application/pdf'});
  if(navigator.canShare&&navigator.canShare({files:[file]})&&navigator.share){await navigator.share({files:[file],title:'OzAir Flight Data Card'});}
  else{const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=name;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);}
 }catch(e){if(e.name!=='AbortError')alert('PDF export failed: '+e.message);}
 finally{button.disabled=false;button.textContent=original;}
}
function printNamed(kind){
 if(kind==='Data_Card'&&isIPadStandalone()){exportCardPDF();return;}
 const old=document.title;document.title=pdfName(kind);
 document.body.classList.toggle('print-planner',kind==='Fuel_Planner');document.body.classList.toggle('print-datacard',kind==='Data_Card');
 if(kind==='Data_Card')renderDataCard();else renderEntirePlanner();
 window.print();setTimeout(()=>{document.title=old;document.body.classList.remove('print-planner','print-datacard');},1200);
}
$('card-print').addEventListener('click',()=>printNamed('Data_Card'));
function renderCardRecipients(){
 $('card-recipients').innerHTML=pilotData.map((p,i)=>`<label><input type="checkbox" data-card-recipient="${i}"> ${esc(p.name)}</label>`).join('');
}
$('card-share').onclick=()=>{const panel=$('card-share-panel');panel.hidden=!panel.hidden;if(!panel.hidden){renderCardRecipients();$('card-share-status').textContent='';panel.scrollIntoView({behavior:'smooth',block:'nearest'});}};
$('card-share-close').onclick=()=>$('card-share-panel').hidden=true;
$('card-prepare-email').onclick=()=>{
 const chosen=[...document.querySelectorAll('#card-recipients [data-card-recipient]:checked')].map(e=>pilotData[Number(e.dataset.cardRecipient)]).filter(p=>p&&p.email);
 if(!chosen.length){$('card-share-status').textContent='Select at least one pilot.';return;}
 const code=model.legs[0]?.trip_code||'Trip',subject=`OzAir Flight Data Card — ${code} — Plan ${$('card-plan').value}`;
 const body=`Attached is the OzAir Flight Data Card for trip ${code}, aircraft ${model.tail||'(verify aircraft)'}, Plan ${$('card-plan').value}.\n\nIMPORTANT: Please verify the aircraft, dates, fuel quantities, and flight details independently.\n\n[ATTACH THE SAVED DATA CARD PDF BEFORE SENDING]`;
 const mail='mailto:'+chosen.map(p=>p.email).join(',')+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
 $('card-share-status').textContent='Opening your email application. Save the PDF first, attach it manually, verify recipients, then send. No message has been sent by OzAir Flight Tools.';
 window.location.href=mail;
};


// Offline release transfer. A transfer file is data, never executable code.

function renderEntirePlanner(){const el=$('entire-print');if(!el)return;const x=compute();el.innerHTML=`<h1>Fuel Planner — ${esc(model.legs[0]?.trip_code||'Trip')} — ${esc(model.tail||'Aircraft')}</h1><p>Printed ${new Date().toLocaleString()} • Density method: ${esc(model.density_method||'forecast')}</p>${model.legs.map((l,i)=>`<section class="entire-leg"><h2>Leg ${i+1}: ${esc(l.departure)} → ${esc(l.destination)} • ${esc(l.trip_date)}</h2><p>Departure ${esc(displayGMT(l))} • Arrival ${esc(displayGMT(l,true))} • FBO ${esc(l.arrival_fbo||'—')} • ZFW ${fmt(n(l.zfw_lb))} lb • Planned burn ${fmt(n(l.burn_lb))} lb • Required fuel ${fmt(n(l.required_fuel_lb))} lb</p><p>Departure range ${esc(l.temperature_band||'—')} • Arrival range ${esc(l.arrival_temperature_band||'—')} • Source ${esc(l.forecast_source||'manual')} • Method ${esc(l.fuel_purchase_method)} • Price ${money(n(l.fuel_price_per_gal))}/gal • Ramp ${money(n(l.waiverable_ramp_fee_usd))} • Waiver minimum ${fmt(n(l.minimum_gallons_for_waiver))} gal • Mandatory ${money(n(l.mandatory_fees_usd))}</p><table><thead><tr><th>Plan</th><th>Fuel purchase (lb)</th><th>Fuel buy (gal)</th><th>Start fuel</th><th>Landing fuel</th><th>Cost</th></tr></thead><tbody>${['1','2','3'].map(p=>{const c=x.rows[i][p];return `<tr><td>${p}</td><td>${fmt(n(l.plans[p].purchase_lb))}</td><td>${c.g===null?'—':fmt(c.g)}</td><td>${fmt(c.start)}</td><td>${fmt(c.land)}</td><td>${c.cost===null?'—':money(c.cost)}</td></tr>`}).join('')}</tbody></table></section>`).join('')}<h2>Trip totals: ${['1','2','3'].map(p=>'Plan '+p+' '+money(x.totals[p])).join(' | ')}</h2>`;}
document.addEventListener('focusin',e=>{const t=e.target;if(t.matches('#planner input[type=number]'))t.select();});
document.addEventListener('wheel',e=>{if(e.target.matches('input[type=number]')&&document.activeElement===e.target)e.target.blur();},{passive:true});
$('density-method').addEventListener('change',e=>{model.density_method=e.target.value;markDirty();render();});
$('wx-fetch').addEventListener('click',refreshForecasts);
$('print-entire').addEventListener('click',()=>printNamed('Fuel_Planner'));

const APP_VERSION='0.32.24';
function transferStatus(msg,isError=false){const el=$('update-message');el.textContent=msg;el.style.color=isError?'#a42323':'#205b42';}
function transferPayload(){return {format:'ozair-flight-tools-transfer',schema:1,applicationVersion:APP_VERSION,exportedAt:new Date().toISOString(),workingTrip:{model:clone(model),version},references:{aircraftData:clone(aircraftData),methodData:clone(methodData),pilotData:clone(pilotData)}};}
$('update-export').onclick=()=>{storeDraft();storeRefs();download('OzAir_Transfer_Backup_v0.25_'+new Date().toISOString().slice(0,10)+'.json',transferPayload());transferStatus('Transfer backup downloaded. Keep it with your individual saved trip files.');};
$('update-import').onclick=()=>$('update-file').click();
$('update-file').onchange=async e=>{const file=e.target.files?.[0];if(!file)return;
try{
if(file.size>3000000)throw Error('File exceeds 3 MB transfer limit.');
const payload=JSON.parse(await file.text());
if(payload.format!=='ozair-flight-tools-transfer'||payload.schema!==1)throw Error('This is not a supported OzAir transfer backup.');
const refs=payload.references||{},trip=payload.workingTrip||{};
if(!Array.isArray(refs.aircraftData)||!refs.aircraftData.length||!refs.aircraftData.every(a=>a&&typeof a.tail==='string'&&a.tail.trim()&&Number.isFinite(Number(a.max))&&Number(a.max)>0&&['single','overwing'].includes(a.refuel)))throw Error('Invalid aircraft records.');
if(!Array.isArray(refs.methodData)||!refs.methodData.length||!refs.methodData.every(m=>typeof m==='string'&&m.trim()))throw Error('Invalid fuel purchase methods.');
if(!Array.isArray(refs.pilotData)||!refs.pilotData.every(p=>p&&typeof p.name==='string'&&typeof p.cell==='string'&&typeof p.email==='string'))throw Error('Invalid pilot directory.');
const imported=normalizeTrip(trip.model||{});
const incomingVersion=Number(trip.version);
if(!Number.isInteger(incomingVersion)||incomingVersion<1)throw Error('Invalid working trip version.');
if(payload.applicationVersion&&Number(payload.applicationVersion)>Number(APP_VERSION))throw Error('Backup came from a newer application release. Open that version instead of downgrading.');
const message='Import backup from application v'+(payload.applicationVersion||'unknown')+'?\n\nThis will REPLACE the current working trip and local aircraft, fuel method, and pilot lists. Save your current trip and export a backup first.\n\nContinue?';
if(!confirm(message)){transferStatus('Import canceled. Nothing changed.');return;}
// Validate completely before replacing any in-memory data.
model=imported;version=incomingVersion;aircraftData=clone(refs.aircraftData);methodData=[...refs.methodData];pilotData=clone(refs.pilotData);sortPilots();dirty=false;
storeRefs();storeDraft();render();renderCalculator();renderAdmin();renderDataCard();transferStatus('Import completed. Verify the restored trip and reference lists before operational use.');
}catch(err){transferStatus('Import failed: '+err.message,true);}
finally{e.target.value='';}
};

clearCalculator();openView('home');
