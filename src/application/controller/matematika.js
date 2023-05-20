function tambah(req,res){
    const angka1 = parseFloat(req.query.angka1)
    const angka2 = parseFloat(req.query.angka2)
    const hasil = angka1 + angka2
    res.send({
        message:`HASIL TAMBAH ${hasil}`
    })
}
function kurang(req,res){
    const angka1 = parseFloat(req.query.angka1)
    const angka2 = parseFloat(req.query.angka2)
    const hasil = angka1-angka2
    res.send({
        message:`HASIL KURANG ${hasil}`
    })
}
function kali(req,res){
    const angka1 = parseFloat(req.query.angka1)
    const angka2 = parseFloat(req.query.angka2)
    const hasil = angka1*angka2
    res.send({
        message:`HASIL KALI ${hasil}`
    })
}
function bagi(req,res){
    const angka1 = parseFloat(req.query.angka1)
    const angka2 = parseFloat(req.query.angka2)
    const hasil = angka1/angka2
    res.send({
        message:`HASIL bagi ${hasil}`
    })
}

module.exports={
    tambah,
    kurang,
    kali,
    bagi
}