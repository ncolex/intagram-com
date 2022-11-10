export const Footer = () => {
    return (
        <div className="h-16 w-9/12 m-auto flex justify-center flex-col">
            <div className='h-9'>
                <a href="https://about.meta.com/" target="blank" className='text-xs m-2.5 text-gray-500'>Meta</a>
                <a href="https://about.instagram.com/" target="blank" className='text-xs m-2.5 text-gray-500'>About</a>
                <a href="https://about.instagram.com/blog/" target="blank" className='text-xs m-2.5 text-gray-500'>Blog</a>
                <a href="https://about.instagram.com/about-us/careers" target="blank" className='text-xs m-2.5 text-gray-500'>jobs</a>
                <a href="https://help.instagram.com/" target="blank" className='text-xs m-2.5 text-gray-500'>Help</a>
                <a href="https://developers.facebook.com/docs/instagram" target="blank" className='text-xs m-2.5 text-gray-500'>API</a>
                <a href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect" className='text-xs m-2.5 text-gray-500'>Privacy</a>
                <a href="https://help.instagram.com/581066165581870/" className='text-xs m-2.5 text-gray-500'>Terms</a>
                <a href="https://www.instagram.com/directory/profiles/" className='text-xs m-2.5 text-gray-500'>Top Accounts</a>
                <a href="https://www.instagram.com/directory/hashtags/" className='text-xs m-2.5 text-gray-500'>Hashtags</a>
                <a href="https://www.instagram.com/explore/locations/" className='text-xs m-2.5 text-gray-500'>Locations</a>
                <a href="https://www.instagram.com/web/lite/" className='text-xs m-2.5 text-gray-500'>Instagram Lite</a>
                <a href="https://www.facebook.com/help/instagram/261704639352628" className='text-xs m-2.5 text-gray-500'>Contact Uploading & Non-users</a>
            </div>
            <div className='flex justify-center'>
                <div className='text-xs text-gray-500 mt-4 mr-10'>
                    <select className="w-16" name="language" id="lang">
                        <option value="en">English</option>
                        <option value="af">Afrikaans</option>
                        <option value="cs">Čeština</option>
                        <option value="da">Dansk</option>
                        <option value="de">Deutsch</option>
                        <option value="el">Ελληνικά</option>
                        <option value="en-gb">English (UK)</option>
                        <option value="es">Español (España)</option>
                        <option value="es-la">Español</option>
                        <option value="fi">Suomi</option>
                        <option value="fr">Français</option>
                        <option value="id">Bahasa Indonesia</option>
                        <option value="it">Italiano</option>
                        <option value="ja">日本語</option>
                        <option value="ko">한국어</option>
                        <option value="ms">Bahasa Melayu</option>
                        <option value="nb">Norsk</option>
                        <option value="nl">Nederlands</option>
                        <option value="pl">Polski</option>
                        <option value="pt-br">Português (Brasil)</option>
                        <option value="pt">Português (Portugal)</option>
                        <option value="ru">Русский</option>
                        <option value="sv">Svenska</option>
                        <option value="th">ภาษาไทย</option>
                        <option value="tl">Filipino</option>
                        <option value="tr">Türkçe</option>
                        <option value="zh-cn">中文(简体)</option>
                        <option value="zh-tw">中文(台灣)</option>
                        <option value="bn">বাংলা</option>
                        <option value="gu">ગુજરાતી</option>
                        <option value="hi">हिन्दी</option>
                        <option value="hr">Hrvatski</option>
                        <option value="hu">Magyar</option>
                        <option value="kn">ಕನ್ನಡ</option>
                        <option value="ml">മലയാളം</option>
                        <option value="mr">मराठी</option>
                        <option value="ne">नेपाली</option>
                        <option value="pa">ਪੰਜਾਬੀ</option>
                        <option value="si">සිංහල</option>
                        <option value="sk">Slovenčina</option>
                        <option value="ta">தமிழ்</option>
                        <option value="te">తెలుగు</option>
                        <option value="vi">Tiếng Việt</option>
                        <option value="zh-hk">中文(香港)</option>
                        <option value="bg">Български</option>
                        <option value="fr-ca">Français (Canada)</option>
                        <option value="ro">Română</option>
                        <option value="sr">Српски</option>
                        <option value="uk">Українська</option>
                    </select>
                </div> <div className='h-9 -ml-6 text-xs text-gray-500 mt-4'>© 2022 Instagram from Meta</div>
            </div>
        </div>
    )
}