let amount=600000;
var net;
if(amount<=250000)
{
    net=amount;
}
else if(amount>=250001&&amount<=500000)
{
    net=amount-(amount-250000)*0.05;
}
else if(amount>=500001&&amount<=750000)
{
    net=amount-250000*0.05-(amount-500000)*0.10;
}
else if(amount>=750001&&amount<=1000000)
{
    net=amount-250000*0.05-250000*0.10-(amount-750000)*0.15;
}
else if(amount>=1000001&&amount<=1250000)
{
    net=amount-250000*0.05-250000*0.10-250000*0.15-(amount-1000000)*0.20;
}
else if(amount>=1250001&&amount<=1500000)
{
    net=amount-250000*0.05-250000*0.10-250000*0.15-250000*0.20-(amount-1250000)*0.25;
}
else
{
    net=amount-250000*0.05-250000*0.10-250000*0.15-250000*0.20-250000*0.25-(amount-1500000)*0.30;
}
console.log(net);