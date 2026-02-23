async function x() {
  const r = await fetch("https://vat.wwa.gr/afm2info", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({afm: "801946016"})});
  const data = await r.json();
  console.log(JSON.stringify(data.firm_act_tab, null, 2));
}
x();
